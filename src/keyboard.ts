interface Glyph {
  glyph: string;
  nameEn: string;
  nameHe?: string;
}

const letters: (Glyph | Glyph[])[] = [
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
  [
    {
      glyph: "ו",
      nameEn: "Waw",
      nameHe: "וָו",
    },
    { nameEn: "Waw Ḥolam", glyph: "\u05D5\u05BA" },
    { nameEn: "Shuruq", glyph: "\u05D5\u05BC" },
  ],
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
  [
    {
      glyph: "כ",
      nameEn: "Kaf",
      nameHe: "כַף",
    },
    {
      nameEn: "Kaf Sofit",
      glyph: "ך",
    },
  ],
  {
    glyph: "ל",
    nameEn: "Lamed",
    nameHe: "לָמֶד",
  },
  [
    {
      glyph: "מ",
      nameEn: "Mem",
      nameHe: "מֵם",
    },
    {
      nameEn: "Mem Sofit",
      glyph: "ם",
    },
  ],
  [
    {
      glyph: "נ",
      nameEn: "Nun",
      nameHe: "נוּן",
    },
    {
      nameEn: "Nun Sofit",
      glyph: "ן",
    },
  ],
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
  [
    {
      glyph: "פ",
      nameEn: "Pe",
      nameHe: "פֵה",
    },
    {
      nameEn: "Pe Sofit",
      glyph: "ף",
    },
  ],
  [
    {
      glyph: "צ",
      nameEn: "Ṣadi",
      nameHe: "צַדִי",
    },
    {
      nameEn: "Ṣadi Sofit",
      glyph: "ץ",
    },
  ],
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
  [
    {
      glyph: "ש",
      nameEn: "Shin",
      nameHe: "שִׁין",
    },
    {
      glyph: "\u05E9\u05C1",
      nameEn: "Shin",
      nameHe: "שִׁין",
    },
    {
      glyph: "\u05E9\u05C2",
      nameEn: "Sin",
      nameHe: "שִׂין",
    },
  ],
  {
    glyph: "ת",
    nameEn: "Taw",
    nameHe: "תָו",
  },
];

const taamim: Glyph[] = [
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

const laaz_het: (Glyph | Glyph[])[] = [
  [
    {
      glyph: "Ḥ",
      nameEn: "Ḥet Uppercase",
    },
    {
      glyph: "ḥ",
      nameEn: "Ḥet Lowercase",
    },
  ],
  [
    {
      glyph: "ح",
      nameEn: "Ḥa (Arabic)",
    },
    {
      glyph: "7",
      nameEn: "Ḥa (Arabizi)",
    },
  ],
];

const laaz_ayin: (Glyph | Glyph[])[] = [
  {
    glyph: "ʕ",
    nameEn: "Voiced Pharyngeal Fricative",
  },
  [
    {
      glyph: "ع",
      nameEn: "ʕayin (Arabic)",
    },
    {
      glyph: "3",
      nameEn: "ʕayin (Arabizi)",
    },
  ],
];

const laaz_tet: (Glyph | Glyph[])[] = [
  [
    {
      glyph: "Ṭ",
      nameEn: "Ṭet Uppercase",
    },
    {
      glyph: "ṭ",
      nameEn: "Ṭet lowercase",
    },
  ],
  [
    {
      glyph: "ط",
      nameEn: "Ṭa (Arabic)",
    },
    {
      glyph: "6",
      nameEn: "Ṭa (Arabizi)",
    },
  ],
];

const laaz_sadi: (Glyph | Glyph[])[] = [
  [
    {
      glyph: "Ṣ",
      nameEn: "Ṣadi uppercase",
    },
    {
      glyph: "ṣ",
      nameEn: "Ṣadi lowercase",
    },
  ],
  [
    {
      glyph: "ص",
      nameEn: "Ṣād (Arabic)",
    },
    {
      glyph: "6",
      nameEn: "Ṣād (Arabizi)",
    },
  ],
];

const laaz_glotal: (Glyph | Glyph[])[] = [
  [
    {
      glyph: "ʔ",
      nameEn: "Glottal Stop",
    },
  ],
  [
    {
      glyph: "ء",
      nameEn: "Hamza (Arabic)",
    },
    {
      glyph: "2",
      nameEn: "Hamza (Arabizi)",
    },
  ],
];

const laaz_ghimel: (Glyph | Glyph[])[] = [
  [
    {
      glyph: "gh",
      nameEn: "Ghimel",
    },
  ],
  [
    {
      glyph: "غ",
      nameEn: "Ghayn (Arabic)",
    },
    {
      glyph: "8",
      nameEn: "Ghayn (Arabizi)",
    },
  ],
];

const clickHandler = (vkb: VirtualKeyboard) => (ev: Event) => {
  const glyph = (ev.target as HTMLButtonElement).innerText;
  vkb.dispatchEvent(new CustomEvent("virtualpress", { detail: glyph }));
};

const glyphButton = (
  vkb: VirtualKeyboard,
  { glyph, nameEn }: Glyph
): HTMLElement => {
  const button = document.createElement("button");
  button.innerText = glyph;
  button.onclick = clickHandler(vkb);
  button.title = nameEn;
  return button;
};

const glyphsRender = (
  vkb: VirtualKeyboard,
  glyph: Glyph | Glyph[]
): HTMLElement => {
  if (Array.isArray(glyph)) {
    const buttonGroup = document.createElement("div");
    buttonGroup.className = "buttonGroup";
    buttonGroup.append(...glyph.map((entry) => glyphButton(vkb, entry)));
    return buttonGroup;
  } else {
    return glyphButton(vkb, glyph);
  }
};

type Layout = {
  id: string;
  sets: {
    title: string;
    data: (Glyph | Glyph[])[];
  }[];
}[];

const vkbLayout: Layout = [
  {
    id: "letters",
    sets: [
      {
        title: "Letters",
        data: letters,
      },
    ],
  },
  {
    id: "niqqud",
    sets: [
      {
        title: "A",
        data: [
          { nameEn: "Qamaṣ", glyph: "\u05B8" },
          { nameEn: "Pataḥ", glyph: "\u05B7" },
          { nameEn: "Ḥaṭaf Pataḥ", glyph: "\u05B2" },
        ],
      },
      {
        title: "E",
        data: [
          { nameEn: "Ṣere", glyph: "\u05B5" },
          { nameEn: "Segol", glyph: "\u05B6" },
          { nameEn: "Ḥaṭaf Segol", glyph: "\u05B1" },
        ],
      },
      {
        title: "I",
        data: [
          { nameEn: "Ḥiriq Male", glyph: "\u05B4\u05D9" },
          { nameEn: "Ḥiriq", glyph: "\u05B4" },
        ],
      },
      {
        title: "O",
        data: [
          { nameEn: "Waw Ḥolam", glyph: "\u05D5\u05BA" },
          {
            nameEn: "Ḥolam",
            glyph: "\u05B9",
          },
          { nameEn: "Qamaṣ Qaṭan", glyph: "\u05C7" },
          { nameEn: "Ḥaṭaf Qamaṣ", glyph: "\u05B3" },
        ],
      },
      {
        title: "U",
        data: [
          { nameEn: "Shuruq", glyph: "\u05D5\u05BC" },
          { nameEn: "Qubuṣ", glyph: "\u05BB" },
        ],
      },
      {
        title: "-",
        data: [{ nameEn: "Shwa", glyph: "\u05B0" }],
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
      },
    ],
  },
  {
    id: "punctuation",
    sets: [
      {
        title: "Diacritics",
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
        data: taamim,
      },
    ],
  },
  {
    id: "laaz",
    sets: [
      {
        title: "Ḥet ח",
        data: laaz_het,
      },
      {
        title: "ʕayin ע",
        data: laaz_ayin,
      },
      {
        title: "Ṭet ט",
        data: laaz_tet,
      },
      {
        title: "Ṣadi צ",
        data: laaz_sadi,
      },
      {
        title: "Glottal Stop א",
        data: laaz_glotal,
      },
      {
        title: "Ghimel גֿ",
        data: laaz_ghimel,
      },
    ],
  },
];

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
          setRoot.appendChild(glyphsRender(this, entry));
        });
        groupRoot.appendChild(setRoot);
      });
      root.appendChild(groupRoot);
    });
  }
}

customElements.define("virtual-keyboard", VirtualKeyboard);
