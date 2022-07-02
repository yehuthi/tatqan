import "./style/style.scss";
import "./keyboard";

(document.getElementById("vkb") as any).addEventListener(
  "virtualpress",
  ({ detail: glyph }: { detail: string }) => {
    const src = document.getElementById("source") as HTMLTextAreaElement;
    const { selectionStart } = src;
    src.value =
      src.value.slice(0, selectionStart) +
      glyph +
      src.value.slice(src.selectionEnd);
    setTimeout(() => {
      src.focus();
      src.selectionEnd = src.selectionStart = selectionStart + glyph.length;
    }, 0);
  }
);
