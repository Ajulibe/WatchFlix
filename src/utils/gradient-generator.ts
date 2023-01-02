const hexString = "0123456789abcdef";

/* generate a random color */
const randomColor = (): string => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hexString[Math.floor(Math.random() * hexString.length)];
  }
  return hexCode;
};

/* compose the colors and return */
export const generatorFn = (): string => {
  const colorOne = randomColor();
  const colorTwo = randomColor();
  const degree = Math.floor(Math.random() * 360);
  return `linear-gradient(${degree}deg, ${colorOne}, ${colorTwo})`;
};
