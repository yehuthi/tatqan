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

const taamim = [
  {
    glyph: "\u0591",
    nameEn: "Etnaḥta",
    nameHe: "אֶתְנַחְתָּ֑א",
  },
  {
    glyph: "\u0592",
    nameEn: "Segolta",
    nameHe: "סְגוֺלְתָּא֒",
  },
  {
    glyph: "\u0593",
    nameEn: "Shalshelet",
    nameHe: "שַׁלְשֶׁ֓לֶת",
  },
  {
    glyph: "\u0594",
    nameEn: "Zaqef Qaṭan",
    nameHe: "זָקֵף קָטֹ֔ן",
  },
  {
    glyph: "\u0595",
    nameEn: "Zaqef Gadol",
    nameHe: "זָקֵף גָּד֕וֹל",
  },
  {
    glyph: "\u0596",
    nameEn: "Tifḥa",
    nameHe: "טִפְחָ֖א",
  },
  {
    glyph: "\u0597",
    nameEn: "Reviạ",
    nameHe: "רְבִ֗יעַ",
  },
  {
    glyph: "\u0598",
    nameEn: "Zarqa",
    nameHe: "זַרְקָא֮",
  },
  {
    glyph: "\u0599",
    nameEn: "Pashṭa",
    nameHe: "פַּשְׁטָא֙",
  },
  {
    glyph: "\u059a",
    nameEn: "Yetiv",
    nameHe: "יְ֚תִיב",
  },
  {
    glyph: "\u059b",
    nameEn: "Tevir",
    nameHe: "תְּבִ֛יר",
  },
  {
    glyph: "\u059c",
    nameEn: "Azla Geresh",
    nameHe: "אַזְלָא-גֵּ֜רֵשׁ",
  },
  {
    glyph: "\u059d",
    nameEn: "Geresh Muqdam",
    nameHe: "קַדְמָ֨א-גרש",
  },
  {
    glyph: "\u059e",
    nameEn: "Gershayim",
    nameHe: "גֵּרְשַׁ֞יִם",
  },
  {
    glyph: "\u059f",
    nameEn: "Qarney Farah",
    nameHe: "קַרְנֵי פָרָ֟ה",
  },
  {
    glyph: "\u05a0",
    nameEn: "Telisha Gedolah",
    nameHe: "תְּ֠לִישָא גְדוֹלָה",
  },
  {
    glyph: "\u05a1",
    nameEn: "Pazer",
    nameHe: "פָּזֵ֡ר",
  },
  {
    glyph: "\u05a2",
    nameEn: "Etnaḥ Hafukh",
    nameHe: "אֶתְנָ֢ח הָפוּךְ",
  },
  {
    glyph: "\u05a3",
    nameEn: "Munnaḥ",
    nameHe: "מֻנַּ֣ח",
  },
  {
    glyph: "\u05a4",
    nameEn: "Mahpakh",
    nameHe: "מַהְפַּ֤ך",
  },
  {
    glyph: "\u05a5",
    nameEn: "Merkha",
    nameHe: "מֵרְכָ֥א",
  },
  {
    glyph: "\u05a6",
    nameEn: "Merkha Kfula",
    nameHe: "מֵרְכָא כְּפוּלָ֦ה",
  },
  {
    glyph: "\u05a7",
    nameEn: "Darga",
    nameHe: "דַּרְגָּ֧א",
  },
  {
    glyph: "\u05a8",
    nameEn: "Qadma",
    nameHe: "קַדְמָ֨א",
  },
  {
    glyph: "\u05a9",
    nameEn: "Telisha Qeṭannah",
    nameHe: "תְּלִישָא קְטַנָּה֩",
  },
  {
    glyph: "\u05aa",
    nameEn: "Yare'aḥ Ben Yomo",
    nameHe: "יָרֵחַ בֶּן יוֹמ֪וֹ",
  },
  {
    glyph: "\u05ab",
    nameEn: "Ọleh",
    nameHe: "עוֺלֶ֫ה",
  },
  {
    glyph: "\u05ac",
    nameEn: "Ịluy",
    nameHe: "עִלּוּי֬",
  },
  {
    glyph: "\u05ad",
    nameEn: "Deḥi",
    nameHe: "דְּ֭חִי",
  },
  {
    glyph: "\u05ae",
    nameEn: "Tsinnorit",
    nameHe: "צִנּוֹרִת֘",
  },
  {
    glyph: "\u05af",
    nameEn: "Masorah Circle",
    nameHe: "עִגּוּל מָסוֹרָה",
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
        title: "Diacritics",
        render: glyphButton,
        data: [
          {
            nameEn: "Rafeh",
            nameHe: "רָפֶֿה",
            glyph: "\u05BF",
          },

          {
            nameEn: "Meteg",
            nameHe: "מֶתֶג",
            glyph: "\u05BD",
          },
        ],
      },
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
          {
            glyph: "\u00B7",
            nameEn: "Interpunct",
          },
        ],
      },
    ],
  },
  {
    id: "taamim",
    sets: [
      {
        title: "Cantillation",
        render: glyphButton,
        data: taamim,
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
