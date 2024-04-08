function countAllLength(callback, stringOne, stringTwo) {
  const lengthOne = callback(stringOne);
  const lengthTwo = callback(stringTwo);

  console.log(`"${stringOne}" contém ${lengthOne} caracteres`);
  console.log(`"${stringTwo}" contém ${lengthTwo} caracteres`);
}

function lengthCounter(string) {
  return string.length;
}

countAllLength(lengthCounter, "Smart", "NX");
