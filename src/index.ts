import "./keyboard";
import isMobile from "is-mobile";
import * as convert from "./convert";

const source = document.getElementById("source") as HTMLTextAreaElement;
const output = document.getElementById("output") as HTMLOutputElement;

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
  config: {
    targetScript: undefined,
  },
};
const targetScriptSelect: HTMLSelectElement = document.getElementById(
  "targetScriptSelect"
) as HTMLSelectElement;
convert.targetScripts.forEach((targetScript) => {
  const option = document.createElement("option");
  option.innerText = targetScript.nameEn;
  targetScriptSelect.appendChild(option);
});
targetScriptSelect.addEventListener("input", () => {
  const i = targetScriptSelect.selectedIndex;
  if (i === 0) {
    conversion.config.targetScript = undefined;
    output.innerText = "";
  } else {
    conversion.config.targetScript = convert.targetScripts[i - 1];
    output.innerText = convert.convert(conversion);
  }
});
((i) => {
  targetScriptSelect.selectedIndex = i;
  conversion.config.targetScript = convert.targetScripts[i - 1];
})(1);
source.addEventListener("input", () => {
  if (convert.potent(conversion.config))
    output.innerText = convert.convert(conversion);
});

if (!isMobile({ tablet: true })) setTimeout(() => source.focus(), 0);

(document.getElementById("copyButton") as HTMLButtonElement).onclick = () => {
  navigator.clipboard.writeText(
    (convert.potent(conversion.config) ? output.textContent : source.value) ??
      ""
  );
};
