import * as he2paleo from "he2paleo";
import * as unniqqud from "unniqqud";
import n2wordsHe from "n2words/lib/i18n/HE.mjs";

export interface Convert {
  input: HTMLTextAreaElement;
  output: HTMLElement;
  config: Config;
}

export interface Config {
  targetScript?: TargetScript;
  targetNumerals?: TargetNumerals;
  removeDiacritics: Diacritics | 0;
}

export function potent(config: Config): boolean {
  return Boolean(
    config.targetScript ||
      config.removeDiacritics !== 0 ||
      config.targetNumerals
  );
}

export interface Metadata {
  nameEn: string;
  nameHe?: string;
}

export type TargetScript = ((char: string) => string | undefined) & Metadata;

function metaAdorn<T>(a: T & Partial<Metadata>, meta: Metadata): T & Metadata {
  Object.assign(a, meta);
  return a as T & Metadata;
}

export const targetScripts: readonly TargetScript[] = [
  metaAdorn(he2paleo.char, {
    nameEn: "Paleo-Hebrew",
    nameHe: "עִבְרִי קָדוּם",
  }),
];

export type TargetNumerals = ((number: number) => string | undefined) &
  Metadata;

export const targetNumerals: TargetNumerals[] = [
  metaAdorn(
    (number) =>
      number <= Number.MAX_SAFE_INTEGER ? n2wordsHe(Number(number)) : undefined,
    {
      nameEn: "Words",
      nameHe: "מִלִּים",
    }
  ),
];

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
  let inputString = config.targetNumerals
    ? input.value.replace(
        /\d+/g,
        (numberString) =>
          config.targetNumerals!(Number(numberString)) ?? numberString
      )
    : input.value;
  [...inputString].forEach((token) => {
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
