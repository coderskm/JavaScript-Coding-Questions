function greatestOf2Numbers(num1, num2){
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        console.log(`enter valid number.`);
        return;
    }
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}.`);
        return;
    } else if (num2 > num1) {
        console.log(`${num2} is greater than ${num1}.`);
        return;
    } else {
        console.log(`${num1} and ${num2} are equal.`)
        return;
    }
}

greatestOf2Numbers(90, 90);
greatestOf2Numbers("78", "132");
greatestOf2Numbers(89, 900);
greatestOf2Numbers(189, 90);
