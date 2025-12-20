function palindromeNumberOrNot(num) {
     if (typeof num !== "number") {
       console.log(`enter valid number.`);
       return;
     }
     let temp = num;
    let reverseNum = 0;
    while (num !== 0) {
        let digit = num % 10;
        reverseNum = (reverseNum * 10) + digit;
        num = parseInt(num / 10);
    }
    if (temp === reverseNum) {
        console.log(`${temp} is palindrome number.`);
        return;
    } else {
        console.log(`${temp} is not palindrome number.`);
        return;
    }
}

palindromeNumberOrNot(54445);
palindromeNumberOrNot(79834);
palindromeNumberOrNot("54445");
