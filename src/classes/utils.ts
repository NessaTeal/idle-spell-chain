export function getImageUrl(imageName: string) {
  return require(`@/assets/${imageName}.png`);
}

export function getRandomEnumValue<T>(anEnum: T): T[keyof T] {
  const enumValues = (Object.values(anEnum) as unknown) as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
}
