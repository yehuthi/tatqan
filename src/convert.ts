import * as he2paleo from "he2paleo";
import * as unniqqud from "unniqqud";

export interface Convert {
  input: HTMLTextAreaElement;
  output: HTMLElement;
  config: Config;
}

export interface Config {
  targetScript?: TargetScript;
  removeDiacritics: Diacritics | 0;
}

export function potent(config: Config): boolean {
  return Boolean(config.targetScript || config.removeDiacritics !== 0);
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

function convertOnce({ input, output, config }: Convert) {
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
  output.textContent = result;
}

export function applyConfig(convert: Convert) {
  if (potent(convert.config)) {
    convert.input.oninput = () => convertOnce(convert);
    convertOnce(convert);
  } else {
    convert.input.oninput = null;
    convert.output.textContent = "";
  }
}

export function copy(convert: Convert) {
  navigator.clipboard.writeText(
    (potent(convert.config)
      ? convert.output.textContent
      : convert.input.value) ?? ""
  );
}

export function setNiqqud(convert: Convert, niqqud: boolean) {
  if (niqqud) convert.config.removeDiacritics &= ~Diacritics.Niqqud;
  else convert.config.removeDiacritics |= Diacritics.Niqqud;
  applyConfig(convert);
}

export function setTaamim(convert: Convert, taamim: boolean) {
  if (taamim) convert.config.removeDiacritics &= ~Diacritics.Taamim;
  else convert.config.removeDiacritics |= Diacritics.Taamim;
  applyConfig(convert);
}
