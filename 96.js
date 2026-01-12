function hammingDistance(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        console.log(`both or any of the given inputs are not number.`)
        return;
    }

    let XORValue = x ^ y;
    let countSetBits = 0;
    while (XORValue) {
        if (XORValue & 1) {
            countSetBits++;
        }
        XORValue >>= 1;
    }
    console.log(`hamming distance between numbers ${x} and ${y} :- ${countSetBits}`);
    return;
}

hammingDistance(90, "54");
hammingDistance(87, 49);

