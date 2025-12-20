function primeNumberOrnot(num) {
    if (typeof num !== "number") {
        console.log(`enter valid number.`);
        return;
    }
    if (num === 0) {
        console.log(`${num} is not a prime number.`);
        return;
    }
    if (num === 1) {
        console.log(`${num} is neither composite number nor prime number.`);
        return;
    }
    let isPrime = true;
    for (let i = 2; i < num; i++){
        if (num % i === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        console.log(`${num} is a prime number.`);
        return;
    } else {
        console.log(`${num} is not a prime number.`);
        return;
    }
    
    
}

primeNumberOrnot(50);
primeNumberOrnot("50968");
primeNumberOrnot(17);
primeNumberOrnot(0);