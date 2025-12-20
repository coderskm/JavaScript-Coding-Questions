function sumOfDigitsOfNum(num) {
    if (typeof num !== "number") {
        console.log(`enter valid number.`);
        return;
    }
    let temp = num;
    let sum = 0;
    while (num !== 0) {
        let digit = num % 10;
        sum += digit;
        num = parseInt(num / 10);
    }
    console.log(`sum of all digits in ${temp} :- ${sum}`);
    return;
}

sumOfDigitsOfNum(34879);
sumOfDigitsOfNum("8402938");
sumOfDigitsOfNum(54875348);

