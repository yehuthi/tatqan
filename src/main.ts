import "./style/style.scss";
import "./keyboard";
import he2paleo from "he2paleo";

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

source.addEventListener("input", () => {
  output.innerText = he2paleo(source.value);
});
