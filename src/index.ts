import "./keyboard";
import isMobile from "is-mobile";
import * as convert from "./convert";

const source = document.getElementById("source") as HTMLTextAreaElement;
const output = document.getElementById("output") as HTMLOutputElement;

if (!isMobile({ tablet: true })) setTimeout(() => source.focus(), 0);

(document.getElementById("vkb") as any).addEventListener(
  "virtualpress",
  ({ detail: glyph }: { detail: string }) => {
    const { selectionStart } = source;
    source.value =
      source.value.slice(0, selectionStart) +
      glyph +
      source.value.slice(source.selectionEnd);
    source.dispatchEvent(new Event("input"));
    setTimeout(() => {
      source.focus();
      source.selectionEnd = source.selectionStart =
        selectionStart + glyph.length;
    }, 0);
  }
);

const conversion: convert.Convert = {
  input: source,
  output,
  config: {
    targetScript: undefined,
    removeDiacritics: 0,
  },
};
const targetScriptSelect: HTMLSelectElement = document.getElementById(
  "targetScriptSelect"
) as HTMLSelectElement;
convert.targetScripts.forEach((targetScript) => {
  const option = document.createElement("option");
  option.textContent = targetScript.nameEn;
  targetScriptSelect.appendChild(option);
});
targetScriptSelect.addEventListener("input", () => {
  const i = targetScriptSelect.selectedIndex;
  conversion.config.targetScript =
    i === 0 ? undefined : convert.targetScripts[i - 1];
  convert.applyConfig(conversion);
});
((i) => {
  targetScriptSelect.selectedIndex = i;
  conversion.config.targetScript = convert.targetScripts[i - 1];
})(1);
convert.applyConfig(conversion);

(() => {
  const niqqudToggle = document.getElementById(
    "niqqudToggle"
  ) as HTMLInputElement;
  const taamimToggle = document.getElementById(
    "taamimToggle"
  ) as HTMLInputElement;

  niqqudToggle.addEventListener("input", () =>
    convert.setNiqqud(conversion, niqqudToggle.checked)
  );
  taamimToggle.addEventListener("input", () =>
    convert.setTaamim(conversion, taamimToggle.checked)
  );
})();

(document.getElementById("copyButton") as HTMLButtonElement).onclick = () =>
  convert.copy(conversion);
