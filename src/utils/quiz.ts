import { SP } from './species.tsx';

export type QuizQuestionType = {
  // Unique name of the answer, see species.tsx
  rightAnswer: string;

  // If exist, use this image in the answer screen, otherwise the selected answer images will be used
  imageAnswer?: number;
};

// One question by species, see species.tsx
// Adding a new entry will add another question (before select 10 random questions)
export const quizzes: Array<QuizQuestionType> = [
  {
    rightAnswer: SP.Rh, // Petit rhino
    imageAnswer: undefined,
  },
  {
    rightAnswer: SP.Rf, // Grand rhino
    imageAnswer: undefined,
  },
  {
    rightAnswer: SP.Pleaur, // Oreillard roux
    imageAnswer: undefined,
  },
  {
    rightAnswer: SP.Pleaus, // Oreillard gris
    imageAnswer: undefined,
  },
  {
    rightAnswer: SP.Mmba, // Murin mystacinus & cie
    imageAnswer: undefined,
  },
  {
    rightAnswer: SP.Md, // Murin de Daubenton
    imageAnswer: undefined,
  },
  {
    rightAnswer: SP.MD, // Murin des marais
    imageAnswer: undefined,
  },
  {
    rightAnswer: SP.ME, // Murin à oreilles échancrées
    imageAnswer: undefined,
  },
  {
    rightAnswer: SP.Mn, // Murin de Naterrer
    imageAnswer: undefined,
  },
  {
    rightAnswer: SP.MB, // Murin de Bechstein
    imageAnswer: undefined,
  },
  {
    rightAnswer: SP.MM, // Grand Murin
    imageAnswer: undefined,
  },
  {
    rightAnswer: SP.Barbar, // Barbastelle d'Europe
    imageAnswer: undefined,
  },
  {
    rightAnswer: SP.Pipsp, // Pipistrell sp.
    imageAnswer: undefined,
  },
  {
    rightAnswer: SP.Eptser, // Sérotine commune
    imageAnswer: undefined,
  },
];
