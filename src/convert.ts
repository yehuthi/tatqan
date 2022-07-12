import * as he2paleo from "he2paleo";

export interface Convert {
  input: { readonly value: string };
  config: Config;
}

export interface Config {
  targetScript?: TargetScript;
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

export function convert({ input, config }: Convert): string {
  if (!potent(config)) return input.value;
  let result = "";
  [...input.value].forEach((token) => {
    result += config.targetScript!(token) ?? token;
  });
  return result;
}
