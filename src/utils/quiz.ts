import { ImageType } from './images.ts';

export type QuizQuestionType = {
  // Unique name of the answer, see species.tsx
  rightAnswer: string;

  // If exist, use this image in the answer screen, otherwise the selected answer images will be used
  imageAnswer?: ImageType;
};
