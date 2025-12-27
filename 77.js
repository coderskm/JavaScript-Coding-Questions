function fibonacciSeries(totalTerms) {
    if (typeof totalTerms !== "number") {
        console.log(`enter valid number.`);
        return;
    }

    let a = 0, b = 1, c = 0;

    console.log(`fobonacci series upto ${totalTerms} terms :- `)
            console.log(a);
            console.log(b);
    for (let i = 0; i < totalTerms - 2; i++){
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

fibonacciSeries(10);