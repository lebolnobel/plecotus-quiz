export function randomizeArrayElements(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export function getRandomElement(array) {
  if (array.length === 0) return undefined;

  const randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex];
}

export function sliceArray(array) {
  return array.filter(elt => elt.imageId !== undefined).slice(0, 10);
}