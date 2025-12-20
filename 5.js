function powerOf2OrNot(num) {
    const temp = num;
    if (typeof num !== "number") {
        console.log(`enter valid number.`);
        return;
    }
    if (num === 1 || num === 2) {
        console.log(`${temp} is power of 2.`);
        return;
    } else if (num === 0) {
        console.log(`${temp} is not power of 2.`);
        return;
    } else {
        while (num !== 1) {
            if (num % 2 !== 0) {
                console.log(`${temp} is not power of 2.`);
                return;
            }
            num = num / 2;
        }
        console.log(`${temp} is power of 2`);
        return;
    }
    
}

powerOf2OrNot(2);
powerOf2OrNot(0);
powerOf2OrNot("7");
powerOf2OrNot(90);
powerOf2OrNot(16);