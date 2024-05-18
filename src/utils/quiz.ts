export type QuizQuestionType = {
  // Array of images, a random one will be used
  imageIds: Array<number>;

  // Unique name of the answer, see species.tsx
  rightAnswer: string;

  // If exist, use this image in the answer screen, otherwise the selected imageId will be used
  imageAnswer?: number;
};

// One question by species, see species.tsx
export const quizzes: Array<QuizQuestionType> = [
  {
    imageIds: [3],
    rightAnswer: 'Rh',
    imageAnswer: undefined,
  },
  {
    imageIds: [11],
    rightAnswer: 'Rf',
    imageAnswer: undefined,
  },
  {
    imageIds: [17],
    rightAnswer: 'Pleaur',
    imageAnswer: undefined,
  },
  {
    imageIds: [5],
    rightAnswer: 'Pleaus',
    imageAnswer: undefined,
  },
  {
    imageIds: [10],
    rightAnswer: 'Mmba',
    imageAnswer: undefined,
  },
  {
    imageIds: [12],
    rightAnswer: 'Md',
    imageAnswer: undefined,
  },
  {
    imageIds: [14, 15],
    rightAnswer: 'MD',
    imageAnswer: undefined,
  },
  {
    imageIds: [18],
    rightAnswer: 'ME',
    imageAnswer: undefined,
  },
  {
    imageIds: [13],
    rightAnswer: 'Mn',
    imageAnswer: undefined,
  },
  {
    imageIds: [1, 16],
    rightAnswer: 'MB',
    imageAnswer: undefined,
  },
  {
    imageIds: [2, 6, 7, 8, 9],
    rightAnswer: 'MM',
    imageAnswer: undefined,
  },
  {
    imageIds: [],
    rightAnswer: 'Barbar',
    imageAnswer: undefined,
  },
  {
    imageIds: [],
    rightAnswer: 'Pipsp',
    imageAnswer: undefined,
  },
  {
    imageIds: [19],
    rightAnswer: 'Eptser',
    imageAnswer: undefined,
  },
];
