import GridPage from "@/components/GridPage"

const gridInfo = { xs: 1, sm: 1, md: 3, lg: 3 }
export const config = {
  disable: false
}

const TITLE = "Edit this in pages/index.js"
const DESCRIPTION = "Sint aute exercitation cupidatat velit voluptate dolor excepteur consequat. Et laborum duis occaecat officia commodo in commodo nostrud proident elit velit consectetur tempor qui. Minim aute ipsum nulla aliquip cillum non sint aute et culpa elit sit deserunt. Esse sunt dolore dolor sint Lorem quis nostrud laboris. Est do culpa sit proident proident veniam excepteur mollit est nulla duis. Excepteur dolore cupidatat magna duis dolore dolore ullamco voluptate fugiat reprehenderit et. Ipsum officia id reprehenderit cupidatat ad. Consequat labore in do magna magna sit in esse quis consectetur."

const content = [
  {
    title: "News",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: undefined,
    textList: [
      ["3rd Feb 2023", "Reprehenderit deserunt"],
      ["29th Nov 2022", "Anim officia est ut eiusmod"],
      ["29th Oct 2022", "Sint id culpa velit nostrud"],
    ],
    created: undefined
  },
  {
    title: "Research Interests",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "Pariatur id ipsum magna id Lorem esse voluptate consequat.",
    textList: undefined,
    created: undefined
  },
  {
    title: "Looking For",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "Velit amet dolor cupidatat amet ipsum nisi occaecat cillum elit ullamco eiusmod Lorem.",
    textList: undefined,
    created: undefined
  },
  {
    title: "Something About Me",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "Duis velit nostrud veniam est id fugiat consequat id exercitation aliqua veniam deserunt eiusmod. Sunt laboris quis est exercitation aliquip ipsum. Id tempor incididunt occaecat et ad proident qui aute ut nostrud ut minim ad. Voluptate velit deserunt minim laboris occaecat irure ex sunt aliquip nulla. Culpa veniam irure cupidatat laborum Lorem. Dolore dolor ullamco consectetur excepteur labore voluptate minim in tempor quis ad. Et nostrud dolore reprehenderit eu irure aliquip id duis eu fugiat eiusmod reprehenderit amet ex.",
    textList: undefined,
    created: undefined
  },
  {
    title: "Skills",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: undefined,
    textList: [
      ["Mollit, velit, laborea", "Ut nostrud sunt ad aute culpa nostrud non est excepteur non eiusmod."],
      ["Laboris anim", "Proident in minim laborum cillum ea sit sint aute eiusmod officia exercitation."],
      ["Elit, quis, pariatur", "Irure elit nulla eu cillum aliqua magna cupidatat ut culpa anim."],
      ["voluptate, dolor, dolore", "Voluptate pariatur excepteur occaecat laborum minim ex in."],

    ],
    created: undefined
  },
  {
    title: "Quote",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "Logic processed infinitely is emotion.",
    textList: undefined,
    created: undefined
  },
  {
    title: "Interests",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "Adipisicing eiusmod proident do do eu cillum proident consequat do ipsum sint magna deserunt. Voluptate officia nostrud nulla deserunt aliquip deserunt id labore mollit eiusmod nostrud. Veniam Lorem veniam eu officia culpa dolor ad qui quis enim nisi aliqua labore et. Ex et ea pariatur nulla sit enim.",
    textList: undefined,
    created: undefined
  },
  {
    title: "Education",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: undefined,
    textList: [
      ["2020-2023: Veniam adipisicing", "Sunt duis exercitation incididunt adipisicing quis."],
      ["2014-2016: Labore velit esse", "Aliqua sunt exercitation dolor."],
      ["2004-2014: Irure nulla", "Nisi et eu mollit aliquip labore"],
    ],
    created: undefined
  },
  {
    title: "Highlights",
    links: [
      ["#","Dr. doofenshmirtz"],
      ["https://meetesh06.github.io/","meetesh06"],
    ], 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "Aliqua cupidatat ea deserunt elit consequat.Ad ad dolor proident minim excepteur duis ea enim deserunt velit non.",
    textList: undefined,
    created: undefined
  }
]


export default () => <GridPage title={TITLE} description={DESCRIPTION} gridInfo={gridInfo} content={content} />
