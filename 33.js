function frequencyOfSquare(arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0) {
        console.log(`one or both of the given array is empty.`);
        return;
    }

    let freq1 = {};
    let freq2 = {};

    for (let key of arr1) {
        freq1[key] = (freq1[key] || 0) + 1;        
    }

    for (let key of arr2) {
        freq2[key] = (freq2[key] || 0) + 1;
    }

    for (let key in freq1) {
        if (!(key ** 2 in freq2)) {
            console.log(`${JSON.stringify(arr2)} doesn't contain square of ${key}.`);
            return;
        }
        if (freq2[key ** 2] !== freq1[key]) {
            console.log(`${key} and its square are not in same frequency.`);
            return;
        }
    }

    console.log(`${arr2} has square of numbers present in ${arr1} in same frequency.`)
    return;
}

frequencyOfSquare([12, 13, 14, 1, 12], [169, 169, 144, 1, 196]);
frequencyOfSquare([12, 13, 14, 1, 12], []);
frequencyOfSquare([12, 13, 14, 1, 12], [196, 144, 144, 1, 169]);
frequencyOfSquare([12, 13, 14, 1, 12], [196, 144, 1, 1, 169]);
