function factorial(num) {
    if (typeof num!== "number") {
        console.log(`enter valid number.`);
        return;
    }
    let fact = 1;
    for (i = 1; i <= num; i++){
        fact *= i;
    }
    console.log(`factorial of ${num} is ${fact}.`);
    return;
}

factorial('8');
factorial(7);
factorial(5);