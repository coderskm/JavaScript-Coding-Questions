function totalInversions(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++){
        for (j = i + 1; j < arr.length; j++){
            if (arr[i] > arr[j]) {
                count++;
            }
        }
    }
    console.log(`total inversions in given array :- ${count}`);
    return;
}

totalInversions([45, 112, -3, 112, -67, 34, -90, -77]);
totalInversions([]);
