const letters = [
  {
    glyph: "א",
    nameEn: "Alef",
    nameHe: "אָלֶף",
  },
  {
    glyph: "ב",
    nameEn: "Bet",
    nameHe: "בֵּית",
  },
  {
    glyph: "ג",
    nameEn: "Gimel",
    nameHe: "גִימֵל",
  },
  {
    glyph: "ד",
    nameEn: "Dalet",
    nameHe: "דָלֶת",
  },
  {
    glyph: "ה",
    nameEn: "He",
    nameHe: "הֵא",
  },
  {
    glyph: "ו",
    nameEn: "Waw",
    nameHe: "וָו",
  },
  {
    glyph: "ז",
    nameEn: "Zayin",
    nameHe: "זַיִן",
  },
  {
    glyph: "ח",
    nameEn: "Ḥet",
    nameHe: "חֵית",
  },
  {
    glyph: "ט",
    nameEn: "Tet",
    nameHe: "טֵית",
  },
  {
    glyph: "י",
    nameEn: "Yod",
    nameHe: "יוֹד",
  },
  {
    glyph: "כ",
    nameEn: "Kaf",
    nameHe: "כַף",
    sofit: "ך",
  },
  {
    glyph: "ל",
    nameEn: "Lamed",
    nameHe: "לָמֶד",
  },
  {
    glyph: "מ",
    nameEn: "Mem",
    nameHe: "מֵם",
    sofit: "ם",
  },
  {
    glyph: "נ",
    nameEn: "Nun",
    nameHe: "נוּן",
    sofit: "ן",
  },
  {
    glyph: "ס",
    nameEn: "Samekh",
    nameHe: "ְסָמֶך",
  },
  {
    glyph: "ע",
    nameEn: "ʕayin",
    nameHe: "עַיִן",
  },
  {
    glyph: "פ",
    nameEn: "Pe",
    nameHe: "פֵה",
    sofit: "ף",
  },
  {
    glyph: "צ",
    nameEn: "Ṣadi",
    nameHe: "צַדִי",
    sofit: "ץ",
  },
  {
    glyph: "ק",
    nameEn: "Qof",
    nameHe: "קוֹף",
  },
  {
    glyph: "ר",
    nameEn: "Resh",
    nameHe: "רֵישׁ",
  },
  {
    glyph: "ש",
    nameEn: "Shin",
    nameHe: "שִׁין",
  },
  {
    glyph: "ת",
    nameEn: "Taw",
    nameHe: "תָו",
  },
];

const clickHandler = (vkb: VirtualKeyboard) => (ev: Event) => {
  const glyph = (ev.target as HTMLButtonElement).innerText;
  vkb.dispatchEvent(new CustomEvent("virtualpress", { detail: glyph }));
};

const glyphButton = (
  vkb: VirtualKeyboard,
  { glyph }: { glyph: string }
): HTMLElement => {
  const button = document.createElement("button");
  button.innerText = glyph;
  button.onclick = clickHandler(vkb);
  return button;
};

const glyphSofitButton = (
  vkb: VirtualKeyboard,
  entry: { glyph: string; sofit?: string }
): HTMLElement => {
  const nonSofitButton = glyphButton(vkb, entry);
  const { sofit } = entry;
  if (sofit) {
    const buttonGroup = document.createElement("div");
    buttonGroup.className = "sofitGroup";
    const sofitButton = glyphButton(vkb, { glyph: sofit });
    buttonGroup.append(nonSofitButton, sofitButton);
    return buttonGroup;
  } else {
    return nonSofitButton;
  }
};

const vkbLayout = [
  {
    id: "letters",
    sets: [
      {
        title: "Letters",
        data: letters,
        render: glyphSofitButton,
      },
    ],
  },
  {
    id: "niqqud",
    sets: [
      {
        title: "A",
        data: [{ glyph: "\u05B8" }, { glyph: "\u05B7" }, { glyph: "\u05B2" }],
        render: glyphButton,
      },
      {
        title: "E",
        data: [{ glyph: "\u05B5" }, { glyph: "\u05B6" }, { glyph: "\u05B1" }],
        render: glyphButton,
      },
      {
        title: "I",
        data: [{ glyph: "\u05B4\u05D9" }, { glyph: "\u05B4" }],
        render: glyphButton,
      },
      {
        title: "O",
        data: [
          { glyph: "\u05B9" },
          { glyph: "ו\u05BA" },
          { glyph: "\u05C7" },
          { glyph: "\u05B3" },
        ],
        render: glyphButton,
      },
      {
        title: "U",
        data: [{ glyph: "ו\u05BC" }, { glyph: "\u05BB" }],
        render: glyphButton,
      },
      {
        title: "-",
        data: [{ glyph: "\u05B0" }],
        render: glyphButton,
      },
    ],
  },
  {
    id: "special",
    sets: [
      {
        title: "Special",
        data: [
          {
            glyph: "\uFB4F",
            nameEn: "Alef Lamed Ligature",
          },
          {
            glyph: "\u05F2",
            nameEn: "Double Yod",
          },
          {
            glyph: "\u05EF",
            nameEn: "Yod Triangle",
          },
          {
            glyph: "\u05C6",
            nameEn: "Nun Hafukhah",
          },
          {
            glyph: "\u05F1",
            nameEn: "Waw Yod Ligature",
          },
          {
            glyph: "\u05F0",
            nameEn: "Waw Waw Ligature",
          },
        ],
        render: glyphButton,
      },
    ],
  },
  {
    id: "punctuation",
    sets: [
      {
        title: "Punctuation",
        render: glyphButton,
        data: [
          {
            glyph: "\u05C3",
            nameEn: "Sof Pasuq",
          },
          {
            glyph: "\u05C0",
            nameEn: "Paseq",
          },
          {
            glyph: "\u05BE",
            nameEn: "Maqaf",
          },
          {
            glyph: "\u05F4",
            nameEn: "Gershayim",
          },
          {
            glyph: "\u05F3",
            nameEn: "Geresh",
          },
        ],
      },
    ],
  },
] as const;

class VirtualKeyboard extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({ mode: "open" });
    root.innerHTML = `<link rel="stylesheet" href="vkb.css">`;
    vkbLayout.forEach((group) => {
      const groupRoot = document.createElement("div");
      groupRoot.className = group.id;
      group.sets.forEach((set) => {
        const setRoot = document.createElement("fieldset");
        setRoot.dir = "rtl";
        setRoot.innerHTML = `<legend>${set.title}</legend>`;
        set.data.forEach((entry) => {
          setRoot.appendChild(set.render(this, entry));
        });
        groupRoot.appendChild(setRoot);
      });
      root.appendChild(groupRoot);
    });
  }
}

customElements.define("virtual-keyboard", VirtualKeyboard);
