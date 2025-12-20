function greatestOf3Numbers(num1, num2, num3) {
  if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
    console.log(`enter valid number.`);
    return;
  }
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} greater than ${num2} and ${num3}.`);
    return;
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} greater than ${num1} and ${num3}.`);
    return;
  } else if (num3 > num1 && num3 > num2) {
    console.log(`${num3} greater than ${num1} and ${num2}.`);
    return;
  } else {
    console.log(`${num1}, ${num2} and ${num3} are equal.`);
    return;
  }
}

greatestOf3Numbers(90, 90, 90);
greatestOf3Numbers("90", "54", "12");
greatestOf3Numbers(57, 12, 45);
greatestOf3Numbers(9, 34, 1);
greatestOf3Numbers(60, 54, 90);
