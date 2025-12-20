function totalDigitsInNum(num) {
    if (typeof num !== "number") {
      console.log(`enter valid number.`);
      return;
    }
    const temp = num;
    let totalDigits = 0;
    while (num !== 0) {
        num % 10;
        totalDigits++;
        num = parseInt(num / 10);
    }
    console.log(`total digits in ${temp} :- ${totalDigits}`);
    return;
}

totalDigitsInNum(58954);
totalDigitsInNum(58123560956954);
totalDigitsInNum("8609");
