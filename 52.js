function replaceElementWithItsFrequency(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    let freq = {};
    for (let key of arr) {
        freq[key] = (freq[key] || 0) + 1;
    }
    console.log(`original array :- ${JSON.stringify(arr)}`);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = freq[arr[i]];
    }
    console.log(`array after replacing every element with its frequency :- ${JSON.stringify(arr)}`);
}

replaceElementWithItsFrequency([67, -23, 12, -89, 98, -43, 79, 56]);
replaceElementWithItsFrequency([]);
replaceElementWithItsFrequency([67, -23, 67, -89, 79, -43, 79, 56, 79]);
