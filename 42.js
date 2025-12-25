function squareAndSort(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }

    console.log(`original array :- ${JSON.stringify(arr)}`);
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i] ** 2;
    }

    arr = arr.sort((a, b) => a - b);
    console.log(`square and sorted array :- ${JSON.stringify(arr)}`);
    return;

}

squareAndSort([34, 12, -79, 67, 54]);
squareAndSort([3, 1, -9, 7, 4]);
squareAndSort([]);
