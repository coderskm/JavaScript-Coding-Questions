function evenOrOdd(num) {
    if (typeof num !== 'number') {
        console.log(`enter valid number.`);
        return;
    }
    num % 2 === 0 ? console.log(`${num} is even number.`) : console.log(`${num} is odd number.`);
}

evenOrOdd(90);
evenOrOdd("90");
evenOrOdd(75);