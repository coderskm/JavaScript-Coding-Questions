function bubbleSort(arr) {
    console.log(`original array :- ${JSON.stringify(arr)}`);
    for (let j = arr.length - 1; j > 0; j--){
        for (let i = 0; i < j; i++){
            if (arr[i] > arr[i+1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
    console.log(`bubble sorted array :- ${JSON.stringify(arr)}`);
    return;
}

bubbleSort([4, 2, 6, 5, 1, 3]);