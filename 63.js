function convertStringToNumber(str) {
  if (str.trim().length === 0) {
    console.log(`given string is empty`);
    return;
  }

  str = str.trim();
  let num = +str;

  console.log(`given string converted to number :- ${num}.`);
  return;
}

convertStringToNumber("return to me");
convertStringToNumber("");
convertStringToNumber("90");
convertStringToNumber("-89342");
