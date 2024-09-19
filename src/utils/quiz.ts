import { ImageType } from './images';

export type QuizQuestionType = {
  // Unique name of the answer, see species
  rightAnswer: string;

  // If exist, use this image in the answer screen, otherwise the selected answer images will be used
  imageAnswer?: ImageType;
};
