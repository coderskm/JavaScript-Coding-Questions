function countPairs(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }

    let count = 0;
    for (let i = 0; i < arr.length -1 ; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === i + j) {
                count++;
            }
        }
    }
    console.log(`total count of pairs satisfying condition arr[i]+arr[j] = i+j :- ${count}`);
    return;
}

countPairs([8, 4, 2, 1, 5, 4, 2, 1, 2, 3]);
countPairs([8, 14, 2, 1, 5, 4, 12, 1, 2, 3]);
countPairs([]);
countPairs([1,6,90,34])