function reverseNumber(num) {
    if (typeof num !== "number") {
        console.log(`enter valid number.`);
        return;
    }
    let temp = num;
    let reverseNum = 0;
    while (num !== 0) {
        let digit = num % 10;
        reverseNum = reverseNum * 10 + digit;
        num = parseInt(num / 10);
    }
    console.log(`reverse of ${temp} :- ${reverseNum}`)
}


reverseNumber(358489);
reverseNumber("096896");
reverseNumber(79855879);
