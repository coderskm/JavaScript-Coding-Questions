function swapTwoNumbers(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        console.log(`enter valid number.`);
        return;
    }
    console.log(`numbers before swapping :- num1 = ${num1} and num2 = ${num2}`);
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    console.log(`numbers after swapping :- num1 = ${num1} and num2 = ${num2}`);
    return;
}

swapTwoNumbers(23, 15);
swapTwoNumbers(-23, 15);
swapTwoNumbers("-87","90");
