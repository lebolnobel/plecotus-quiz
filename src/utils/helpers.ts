import { answerImages, images } from './images';
import { SP } from './species';
import type { QuizQuestionType } from './quiz';
import type { ImageType } from './images';

export function addLeadingZero(number: number): string {
  return number > 9 ? `${number}` : `0${number}`;
}

export function generateRandomQuestions(
  total: number,
): Array<QuizQuestionType> {
  const values = Object.keys(SP);

  if (total < 14) {
    return sliceArray(randomizeQuizElements(values), total).map((value) =>
      getElement(value),
    );
  } else {
    return Array(total)
      .fill(null)
      .map(() => getRandomElementOrVoid(values))
      .filter((value) => value != undefined)
      .map((value) => getElement(value));
  }
}

export function getRandomElementOrVoid<T>(array: Array<T>): void | T {
  if (array.length === 0) return undefined;

  return getRandomElement(array);
}

export function getRandomElement<T>(array: Array<T>): T {
  const randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex];
}

function getElement(value: string): QuizQuestionType {
  return {
    imageAnswer: answerImages[value],
    image:
      getRandomElement<ImageType>(
        images.filter((img) => img.speciesId === value),
      ) || undefined,
  };
}

function randomizeQuizElements<T>(array: Array<T>): Array<T> {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function sliceArray<T>(array: Array<T>, total: number): Array<T> {
  return array.slice(0, total);
}
