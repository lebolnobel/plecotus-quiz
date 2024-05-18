type ImageType = {
  title: string;
  url: string;
  authorId?: number;
  place?: string;
  description?: string;
};

export const images: { [key: number]: ImageType } = {
  1: {
    title: 'Murin de Bechstein',
    url: './assets/img/species/P1020489.JPG',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  2: {
    title: 'Grand Murin',
    url: './assets/img/species/P1040842.JPG',
    authorId: 2,
    place: 'Otré',
    description: undefined,
  },
  3: {
    title: 'Petit rhinolophe',
    url: './assets/img/species/DSC04546.JPG',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  4: {
    title: 'Barbastelle',
    url: 'https://plecotus.natagora.be/fileadmin/_processed_/b/9/csm_BarbastellaBarbastellus_JeanLouisGathoye__10__162fa6628a.jpg',
    authorId: undefined,
    place: undefined,
    description: undefined,
  },
  5: {
    title: 'Oreillard gris',
    url: './assets/img/species/DSC_9374.JPG',
    authorId: 2,
    place: undefined,
    description: undefined,
  },
  6: {
    title: 'Grand Murin',
    url: './assets/img/species/110302 006.JPG',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  7: {
    title: 'Grand Murin',
    url: './assets/img/species/20110424 002.JPG',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  8: {
    title: 'Grand Murin',
    url: './assets/img/species/DSC07137.JPG',
    authorId: 2,
    place: 'Hastière',
    description: undefined,
  },
  9: {
    title: 'Grand Murin',
    url: './assets/img/species/DSC07167.JPG',
    authorId: 2,
    place: 'Han-sur-Lesse',
    description: undefined,
  },
  10: {
    title: 'Murin à moustaches',
    url: './assets/img/species/P1040808.JPG',
    authorId: 2,
    place: 'Montaigle',
    description: undefined,
  },
  11: {
    title: 'Grand rhinolophe',
    url: './assets/img/species/P1040812.JPG',
    authorId: 2,
    place: 'Durnal',
    description: undefined,
  },
  12: {
    title: 'Murin de Daubenton',
    url: './assets/img/species/P1010182.JPG',
    authorId: 2,
    place: 'Hotton',
    description: undefined,
  },
  13: {
    title: 'Murin de Natterer',
    url: './assets/img/species/P1020544.JPG',
    authorId: 2,
    place: 'Hotton',
    description: undefined,
  },
  14: {
    title: 'Murin des marais',
    url: './assets/img/species/DSC_2031.JPG',
    authorId: 2,
    place: 'Lanaye',
    description: undefined,
  },
  15: {
    title: 'Murin des marais',
    url: './assets/img/species/IMAGE_17.jpg',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  16: {
    title: 'Murin de Bechstein',
    url: './assets/img/species/DSC_6718.jpg',
    authorId: 2,
    place: 'Rochefort',
    description: undefined,
  },
  17: {
    title: 'Oreillard roux',
    url: './assets/img/species/20110131 010.JPG',
    authorId: 2,
    place: 'Briscol',
    description: undefined,
  },
  18: {
    title: 'Murins à oreilles échancrées',
    url: './assets/img/species/DSC_6648.jpg',
    authorId: 2,
    place: 'La Malonne, Cuesmes',
    description: undefined,
  },
  19: {
    title: 'Sérotine commune',
    url: './assets/img/species/DSC09710c.jpg',
    authorId: 2,
    place: 'Purnode',
    description: undefined,
  },
};

type AuthorType = {
  name: string;
  firstname: string;
  mail?: string;
  url?: string;
};

export const authors: { [key: number]: AuthorType } = {
  1: {
    name: 'Lebon',
    firstname: 'Lionel',
    mail: undefined,
    url: 'https://www.instagram.com/lebolnobel/',
  },
  2: {
    name: 'Smits',
    firstname: 'Quentin',
    mail: undefined,
    url: 'https://photos.google.com/share/AF1QipNJ-gMv6hbSQcTJHKhY-Xx8DEtVAA6Ir95CF412tZEUmWz6J-JjYqm4xc2Vnp8Nyg?key=QW53X0dFbkpQLWZSdjVGcDRZb0RjQ3ZPSTFoV2xR',
  },
};
