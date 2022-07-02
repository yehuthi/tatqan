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

class VirtualKeyboard extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({ mode: "open" });

    const letterSet = root.appendChild(document.createElement("fieldset"));
    letterSet.dir = "rtl";
    letterSet.innerHTML = `<legend>Letter</legend>`;
    const clickHandler = (ev: Event & { target: HTMLButtonElement }) => {
      const letter = ev.target.innerText;
      this.dispatchEvent(new CustomEvent("virtualpress", { detail: letter }));
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
        button.innerText = letter.sofit;
        button.title = `${letter.nameEn} Sofit | ${letter.nameHe} סוֹפִית`;
        letterSet.appendChild(button);
      }
    });
  }
}

customElements.define("virtual-keyboard", VirtualKeyboard);
