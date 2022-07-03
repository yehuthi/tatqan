const letters = [
  {
    letter: "א",
    nameEn: "Alef",
    nameHe: "אָלֶף",
  },
  {
    letter: "ב",
    nameEn: "Bet",
    nameHe: "בֵּית",
  },
  {
    letter: "ג",
    nameEn: "Gimel",
    nameHe: "גִימֵל",
  },
  {
    letter: "ד",
    nameEn: "Dalet",
    nameHe: "דָלֶת",
  },
  {
    letter: "ה",
    nameEn: "He",
    nameHe: "הֵא",
  },
  {
    letter: "ו",
    nameEn: "Waw",
    nameHe: "וָו",
  },
  {
    letter: "ז",
    nameEn: "Zayin",
    nameHe: "זַיִן",
  },
  {
    letter: "ח",
    nameEn: "Ḥet",
    nameHe: "חֵית",
  },
  {
    letter: "ט",
    nameEn: "Tet",
    nameHe: "טֵית",
  },
  {
    letter: "י",
    nameEn: "Yod",
    nameHe: "יוֹד",
  },
  {
    letter: "כ",
    nameEn: "Kaf",
    nameHe: "כַף",
    sofit: "ך",
  },
  {
    letter: "ל",
    nameEn: "Lamed",
    nameHe: "לָמֶד",
  },
  {
    letter: "מ",
    nameEn: "Mem",
    nameHe: "מֵם",
    sofit: "ם",
  },
  {
    letter: "נ",
    nameEn: "Nun",
    nameHe: "נוּן",
    sofit: "ן",
  },
  {
    letter: "ס",
    nameEn: "Samekh",
    nameHe: "ְסָמֶך",
  },
  {
    letter: "ע",
    nameEn: "ʕayin",
    nameHe: "עַיִן",
  },
  {
    letter: "פ",
    nameEn: "Pe",
    nameHe: "פֵה",
    sofit: "ף",
  },
  {
    letter: "צ",
    nameEn: "Ṣadi",
    nameHe: "צַדִי",
    sofit: "ץ",
  },
  {
    letter: "ק",
    nameEn: "Qof",
    nameHe: "קוֹף",
  },
  {
    letter: "ר",
    nameEn: "Resh",
    nameHe: "רֵישׁ",
  },
  {
    letter: "ש",
    nameEn: "Shin",
    nameHe: "שִׁין",
  },
  {
    letter: "ת",
    nameEn: "Taw",
    nameHe: "תָו",
  },
];

const niqqud_a = [
  { glyph: "\u05B8" },
  { glyph: "\u05B7" },
  { glyph: "\u05B2" },
];

const niqqud_e = [
  { glyph: "\u05B5" },
  { glyph: "\u05B6" },
  { glyph: "\u05B1" },
];

const niqqud_i = [{ glyph: "\u05B4\u05D9" }, { glyph: "\u05B4" }];

const niqqud_o = [
  { glyph: "\u05B9" },
  { glyph: "ו\u05BA" },
  { glyph: "\u05C7" },
  { glyph: "\u05B3" },
];

const niqqud_u = [{ glyph: "ו\u05BC" }, { glyph: "\u05BB" }];

class VirtualKeyboard extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({ mode: "open" });

    const letterSet = root.appendChild(document.createElement("fieldset"));
    letterSet.dir = "rtl";
    letterSet.innerHTML = `<legend>Letter</legend>`;
    const clickHandler = (ev: Event & { target: HTMLButtonElement }) => {
      const glyph = ev.target.innerText;
      this.dispatchEvent(new CustomEvent("virtualpress", { detail: glyph }));
    };
    letters.forEach((letter) => {
      const button = document.createElement("button");
      button.onclick = clickHandler as any;
      button.innerText = letter.letter;
      button.title = `${letter.nameEn} | ${letter.nameHe}`;
      letterSet.appendChild(button);

      const { sofit } = letter;
      if (sofit) {
        const button = document.createElement("button");
        button.onclick = clickHandler as any;
        button.innerText = letter.sofit;
        button.title = `${letter.nameEn} Sofit | ${letter.nameHe} סוֹפִית`;
        letterSet.appendChild(button);
      }
    });

    const niqqudGroup = (() => {
      const niqqudGroup = document.createElement("div");
      niqqudGroup.className = "niqqud";

      const sets = [
        ["A", niqqud_a],
        ["E", niqqud_e],
        ["I", niqqud_i],
        ["O", niqqud_o],
        ["U", niqqud_u],
      ] as const;
      sets.forEach(([vowel, niqquds]) => {
        const set = document.createElement("fieldset");
        set.dir = "rtl";
        set.innerHTML = `<legend>${vowel}</legend>`;

        niqquds.forEach(({ glyph }) => {
          const button = document.createElement("button");
          button.textContent = glyph;
          button.onclick = clickHandler as any;
          set.appendChild(button);
        });

        niqqudGroup.appendChild(set);
      });
      niqqudGroup.appendChild(
        (() => {
          const set = document.createElement("fieldset");
          set.dir = "rtl";
          set.innerHTML = `<legend>-</legend>`;
          const button = document.createElement("button");
          button.innerText = "\u05B0";
          button.onclick = clickHandler as any;
          set.appendChild(button);
          return set;
        })()
      );

      return niqqudGroup;
    })();
    root.appendChild(niqqudGroup);
    root.appendChild(
      (() => {
        const style = document.createElement("style");
        style.innerHTML = `
@font-face {
  font-family: "u0400";
  src: url("u0400.eot");
  font-weight: normal;
  font-style: normal;
}
button {
  font-family: u0400;
  font-size: 0.9em;
  padding: 0.1em;
}

:host {
  display: flex;
  flex-direction: column;
}

div { justify-content: space-between; }

.niqqud { display: flex; }
.niqqud button::before {
  content: '${"\u00A0"}';
}

fieldset {
  display: flex;
  padding: 0.2em;
}
fieldset > * {
  flex-grow: 1;
}
`;
        return style;
      })()
    );
  }
}

customElements.define("virtual-keyboard", VirtualKeyboard);
