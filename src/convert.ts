import * as he2paleo from "he2paleo";
import * as unniqqud from "unniqqud";

export interface Convert {
  input: { readonly value: string };
  config: Config;
}

export interface Config {
  targetScript?: TargetScript;
  removeDiacritics: Diacritics | 0;
}

export function potent(config: Config): boolean {
  return Boolean(config.targetScript);
}

export type TargetScript = ((char: string) => string | undefined) & {
  nameEn: string;
  nameHe?: string;
};

export const targetScripts: readonly TargetScript[] = (() => {
  const script = (
    f: Function & Partial<{ nameEn: string; nameHe: string }>,
    nameEn: string,
    nameHe?: string
  ): TargetScript => {
    f.nameEn = nameEn;
    f.nameHe = nameHe;
    return f as TargetScript;
  };
  return [script(he2paleo.char, "Paleo-Hebrew", "עִבְרִי קָדוּם")];
})();

export const enum Diacritics {
  Niqqud = 1,
  Taamim = 1 << 1,
}

function diacriticTest(diacritics: Diacritics): (char: string) => boolean {
  return diacritics === (Diacritics.Niqqud | Diacritics.Taamim)
    ? unniqqud.diacritic
    : diacritics === Diacritics.Niqqud
    ? unniqqud.niqqud
    : unniqqud.taam;
}

export function convert({ input, config }: Convert): string {
  if (!potent(config)) return input.value;
  let result = "";
  const skip = config.removeDiacritics
    ? diacriticTest(config.removeDiacritics)
    : () => false;
  const map = config.targetScript ?? ((x) => x);
  [...input.value].forEach((token) => {
    if (skip(token)) return;
    result += map(token) ?? token;
  });
  return result;
}
