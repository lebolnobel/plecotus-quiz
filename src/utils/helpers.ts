import { answerImages } from './images';
import { SP } from './species';
import type { QuizQuestionType } from './quiz';

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
      .map(() => getRandomElement(values))
      .filter((value) => value != undefined)
      .map((value) => getElement(value));
  }
}

export function getRandomElement<T>(array: Array<T>): void | T {
  if (array.length === 0) return undefined;

  const randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex];
}

function getElement(value: string): QuizQuestionType {
  return {
    rightAnswer: value,
    imageAnswer: answerImages[value],
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
