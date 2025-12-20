function freqOfDigits(num) {
    if (typeof num !== "number") {
      console.log(`enter valid number.`);
      return;
    }
    let temp = num;
    let obj = {};
    while (num!==0) {
        let digit = num % 10;
        if (!obj[digit]) {
            obj[digit] = 1;
        } else {
            obj[digit] += 1;
        }
        num = parseInt(num / 10);
    }
    console.log(`frequency of all digits present in ${temp} :- ${JSON.stringify(obj)}`);
    return;
}

freqOfDigits(9098);
freqOfDigits("98");
