function sumInGivenRange(start, end) {
    if (typeof start !== "number" || typeof end !== "number") {
        console.log(`enter valid number.`);
        return;
    }
    if (start > end) {
        console.log(`starting number range greater than ending number range.`);
        return;
    }
    let sum = 0;
    for (let i = start; i <= end; i++){
        sum += i;
    }
    console.log(`$sum of numbers between ${start} and ${end} :- ${sum}`)

}

sumInGivenRange(-12, 24);
sumInGivenRange("56", 79);
sumInGivenRange(79,34);
sumInGivenRange(2, 22);
