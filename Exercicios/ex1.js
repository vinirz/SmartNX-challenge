function getGreaterLength(stringOne, stringTwo) {
  if (stringOne.length > stringTwo.length) {
    return stringOne;
  } else {
    return stringTwo;
  }
}

console.log(getGreaterLength("Smart", "NX"));
