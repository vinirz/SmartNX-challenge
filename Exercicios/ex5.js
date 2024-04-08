const dict = { a: 4, e: 3, i: 1, s: 5 };

function decriptString(string) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    if (character === " ") {
      newString += " ";
    } else if (!isNaN(character)) {
      for (const key in dict) {
        if (dict[key].toString() === character) {
          newString += key;
          break;
        }
      }
    } else {
      newString += character;
    }
  }

  return newString;
}

console.log(decriptString("T35t3 d3 35t4g1o"));
