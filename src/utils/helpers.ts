import type { QuizQuestionType } from './quiz';

export function randomizeQuizElements(
  array: Array<QuizQuestionType>,
): Array<QuizQuestionType> {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export function getRandomElement<T>(array: Array<T>): void | T {
  if (array.length === 0) return undefined;

  const randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex];
}

export const TOTAL = 10;

export function sliceArray(
  array: Array<QuizQuestionType>,
): Array<QuizQuestionType> {
  return array.slice(0, TOTAL);
}
