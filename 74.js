function armstrongNumberOrNot(num) {
    if (typeof num !== "number") {
        console.log(`enter valid number.`);
        return;
    }
    let sum = 0;
    let temp = num, checkNum = num;
    let totalDigits = 0;
    while (num !== 0) {
        num % 10;
        totalDigits++;
        num = parseInt(num / 10);
    }
    console.log(totalDigits)
    while (checkNum !== 0) {
        let digit = checkNum % 10;
        sum += (digit ** totalDigits);
        checkNum = parseInt(checkNum / 10);
    }
    console.log(sum)
    if (temp === sum) {
        console.log(`${temp} is armstrong number.`);
        return;
    } else {
        console.log(`${temp} is not armstrong number.`);
        return;
    }
}

armstrongNumberOrNot(132);
armstrongNumberOrNot("")
armstrongNumberOrNot(153);
armstrongNumberOrNot(1634);
