function frequencyOfChars(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }    
    
    let freq = {}
    for (let key of arr) {
        freq[key] = (freq[key] || 0) + 1;
    }

    console.log(`frequency of characters :-`);
    for (let key in freq) {
        console.log(`frequency of ${key} in ${freq[key]}`);
    }
}

frequencyOfChars(['t', 'e', 's', 't']);
frequencyOfChars([]);
frequencyOfChars(['b', 'e', 's', 't', '', 'f', 'r', 'i', 'e', 'n', 'd', 's']);

