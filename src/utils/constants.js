import { randomizeArrayElements, getRandomElement, sliceArray } from "./helpers";

export const quiz = {
  "plecotus-hiver": {
    title: "Recensement hivernaux",
    description: "Trouver l'espèce qui se cache derrière cette photo !",
    questions: sliceArray(randomizeArrayElements([
      {
        imageId: getRandomElement([3]),
        rightAnswer: 1, // Rh
        imageAnswer: 10003, // Si absent, l'image de la question est utilisée
      },
      {
        imageId: getRandomElement([]),
        rightAnswer: 2, // Rf
      },
      {
        imageId: getRandomElement([]),
        rightAnswer: 3, // Pleaur
      },
      {
        imageId: getRandomElement([5]),
        rightAnswer: 4, // Pleaus
      },
      {
        imageId: getRandomElement([]),
        rightAnswer: 5, // Mmba
      },
      {
        imageId: getRandomElement([]),
        rightAnswer: 6, // Mq
      },
      {
        imageId: getRandomElement([]),
        rightAnswer: 7, // MD
      },
      {
        imageId: getRandomElement([]),
        rightAnswer: 8, // ME
      },
      {
        imageId: getRandomElement([]),
        rightAnswer: 9, // Mn
      },
      {
        imageId: getRandomElement([1]),
        rightAnswer: 10, // MB
      },
      {
        imageId: getRandomElement([2, 6, 7, 8, 9]),
        rightAnswer: 11, // MM
      },
      {
        imageId: getRandomElement([]),
        rightAnswer: 12, // Barbar
      },
      {
        imageId: getRandomElement([]),
        rightAnswer: 13, // Pipsp
      },
      {
        imageId: getRandomElement([]),
        rightAnswer: 14, // Eptser
      },
    ])),
  },
};

export const images = [
  {
    id: 1,
    title: "Murin de Bechstein",
    url: "./static/img/MB/P1020489.JPG",
    authorId: 2, // already known author or one shot author
    place: "Rochefort",
    description: undefined,
  },
  {
    id: 2,
    title: "Grand Murin",
    url: "./static/img/MM/P1040842.JPG",
    authorId: 2, // already known author or one shot author
    place: "Otré",
    description: undefined,
  },
  {
    id: 3,
    title: "Petit rhinolophe",
    url: "./static/img/Rh/DSC04546.JPG",
    authorId: 2, // already known author or one shot author
    place: "Rochefort",
    description: undefined,
  },
  {
    id: 4,
    title: "Barbastelle",
    url: "https://plecotus.natagora.be/fileadmin/_processed_/b/9/csm_BarbastellaBarbastellus_JeanLouisGathoye__10__162fa6628a.jpg",
    authorId: undefined,
    place: undefined,
    description: undefined,
  },
  {
    id: 5,
    title: "Oreillard gris",
    url: "./static/img/Pleaus/DSC_9374.JPG",
    authorId: 2,
    place: undefined,
    description: undefined,
  },
  {
    id: 6,
    title: "Grand Murin",
    url: "./static/img/MM/110302 006.JPG",
    authorId: 2, // already known author or one shot author
    place: "Rochefort",
    description: undefined,
  },
  {
    id: 7,
    title: "Grand Murin",
    url: "./static/img/MM/20110424 002.JPG",
    authorId: 2, // already known author or one shot author
    place: "Rochefort",
    description: undefined,
  },
  {
    id: 8,
    title: "Grand Murin",
    url: "./static/img/MM/DSC07137.JPG",
    authorId: 2, // already known author or one shot author
    place: "Hastière",
    description: undefined,
  },
  {
    id: 9,
    title: "Grand Murin",
    url: "./static/img/MM/DSC07167.JPG",
    authorId: 2, // already known author or one shot author
    place: "Han-sur-Lesse",
    description: undefined,
  },
  {
    id: 10003,
    title: "Rhino",
    url: "https://www.researchgate.net/profile/Romain-Sordello/publication/325789768/figure/fig8/AS:639135303872515@1529393139110/Petit-rhinolophe-Rhinolophus-hipposideros-espece-particulierement-sensible-a-la.png",
    authorId: undefined,
    place: undefined,
    description: "Annotation à réaliser",
  },
];

export const authors = [
  {
    id: 1,
    name: "Lebon",
    firstname: "Lionel",
    mail: undefined,
    url: "https://www.instagram.com/lebolnobel/",
  },
  {
    id: 2,
    name: "Smits",
    firstname: "Quentin",
    mail: undefined,
    url: "https://photos.google.com/share/AF1QipNJ-gMv6hbSQcTJHKhY-Xx8DEtVAA6Ir95CF412tZEUmWz6J-JjYqm4xc2Vnp8Nyg?key=QW53X0dFbkpQLWZSdjVGcDRZb0RjQ3ZPSTFoV2xR",
  },
];

export const genera = [
  {
    id: 1,
    name: "Myotis",
    displayName: "Murin",
  },
  {
    id: 2,
    name: "Rhinolophus",
    displayName: "Rhinolophe",
  },
  {
    id: 3,
    name: "Plecotus",
    displayName: "Oreillard",
  },
  {
    id: 4,
    name: "Barbastella",
    displayName: "Barbastelle",
  },
  {
    id: 5,
    name: "Pipistrellus",
    displayName: "Pipistrelle",
  },
  {
    id: 6,
    name: "Eptesicus",
    displayName: "Sérotine",
  },
];

export const species = [
  {
    id: 1,
    name: "Rhinolophus hipposideros",
    displayName: "Petit rhinolophe",
    description: (
      <>
        Elle s'enroule dans ses ailes, <em>cool, non ?</em>
      </>
    ),
    abbr: "Rh",
    genus: 2,
    imageId: 1,
  },
  {
    id: 2,
    name: "Rhinolophus ferrumequinum",
    displayName: "Grand rhinolophe",
    description: "",
    abbr: "Rf",
    genus: 2,
    imageId: 1,
  },
  {
    id: 3,
    name: "Plecotus auritus",
    displayName: "Oreillard roux",
    description: "",
    abbr: "Pleaur",
    genus: 3,
    imageId: 1,
  },
  {
    id: 4,
    name: "Plecotus austriacus",
    displayName: "Oreillard gris",
    description: "Nez de camion américan",
    abbr: "Pleaus",
    genus: 3,
    imageId: 1,
  },
  {
    id: 5,
    name: "Myotis mystacinus, brandtii, alcathoe",
    displayName: "Murin à moustaches, de Brandt, d’Alcathoe",
    description: "",
    abbr: "Mmba",
    genus: 1,
    imageId: 1,
  },
  {
    id: 6,
    name: "Myotis daubentonii",
    displayName: "Murin de Daubenton",
    description: "",
    abbr: "Md",
    genus: 1,
    imageId: 1,
  },
  {
    id: 7,
    name: "Myotis dasycneme",
    displayName: "Murin des marais",
    description: "",
    abbr: "MD",
    genus: 1,
    imageId: 1,
  },
  {
    id: 8,
    name: "Myotis emarginatus",
    displayName: "Murin à oreilles échancrées",
    description: "",
    abbr: "ME",
    genus: 1,
    imageId: 1,
  },
  {
    id: 9,
    name: "Myotis nattereri",
    displayName: "Murin de Natterer",
    description: "",
    abbr: "Mn",
    genus: 1,
    imageId: 1,
  },
  {
    id: 10,
    name: "Myotis bechsteinii",
    displayName: "Murin de Bechstein",
    description:
      "Grandes oreilles, très longues et larges, en U, dépassant longuement le museau, égalant environ 1/3 de la longueur du corps ",
    abbr: "MB",
    genus: 1,
    imageId: 1,
  },
  {
    id: 11,
    name: "Myotis myotis",
    displayName: "Grand murin",
    description:
      "La plus grande espèce de chauve-souris, elle fait près de 8cm",
    abbr: "MM",
    genus: 1,
    imageId: 1,
  },
  {
    id: 12,
    name: "Barbastella barbastellus",
    displayName: "Barbastelle",
    description: "Espèce évidente",
    abbr: "Barbar",
    genus: 4,
    imageId: 1,
  },
  {
    id: 13,
    name: "Pipistrellus sp.",
    displayName: "Pipistrelles - 3 espèces",
    description: "",
    abbr: "Pipsp",
    genus: 5,
    imageId: 1,
  },
  {
    id: 14,
    name: "Eptesicus serotinus",
    displayName: "Sérotine commune",
    description: "",
    abbr: "Eptser",
    genus: 6,
    imageId: 1,
  },
];
