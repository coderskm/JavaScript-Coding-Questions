function positiveOrNegative(num) {
    if (typeof num !== "number") {
        console.log(`enter valid number.`);
        return;
    }
    if (num === 0) {
        console.log(`${num} is neither positive number nor negative number.`);
        return;
    }
    num > 0 ? console.log(`${num} is positive number`) : console.log(`${num} is negative number`);
    return;
}

positiveOrNegative(90);
positiveOrNegative(0);
positiveOrNegative("4");
positiveOrNegative(-4590);
