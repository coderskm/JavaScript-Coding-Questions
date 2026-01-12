function removeDuplicates(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > arr[i + 1]) {
            console.log(`given array is not sorted.`);
            return;
        }
    }
    console.log(`array before removing duplicates :- ${JSON.stringify(arr)}`)
    let x = 0;
    for (let i = 1; i < arr.length; i++){
        if (arr[x] !== arr[i]) {
            x++;
            arr[x] = arr[i];
        }
    }
    for (let j = 0; j <= x; j++){
        console.log(arr[j]);
    }
    return;
}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
removeDuplicates([]);
removeDuplicates([9, 8, 12, 15, 11]);