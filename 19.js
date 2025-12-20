function sumOfFirstNaturalNums(n) {
    if (typeof n !== "number") {
        console.log(`enter valid number.`);
        return;
    }
    if (n < 0) {
        console.log("number should be positive.");
        return;
    }

    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    console.log(`sum of first ${n} natural numbers :- ${sum}`);
    return;

}

sumOfFirstNaturalNums(20);
sumOfFirstNaturalNums("586");
sumOfFirstNaturalNums(-9);