function sortWithOneSwapOrNot(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    let first = 0, second = 0, count = 0;
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < arr[i - 1]) {
            count++;
            if (first === 0) {
                first = i;
            } else {
                second = i;
            }
        }
    }
    if (count > 2) {
        console.log(`array cannot be sorted with 1 swap.`);
        return;
    } else if (count === 0) {
        console.log(`array is already sorted.`);
        return;
    } else if (count === 1) {
        [arr[first - 1], arr[first]] = [arr[first], arr[first - 1]];
        console.log(`adjacent array elements sorted with one swap :- ${JSON.stringify(arr)}`);
        return;
    } else if (count === 2) {
        [arr[first - 1], arr[second]] = [arr[second], arr[first - 1]];
        console.log(`non-adjacent array elements sorted with one swap :- ${JSON.stringify(arr)}`);
        return;
    } else {
        return;
    }
}

sortWithOneSwapOrNot([1, 5, 3, 4, 2]);
sortWithOneSwapOrNot([1, 2, 4, 3, 5]);
sortWithOneSwapOrNot([]);
sortWithOneSwapOrNot([1, 2, 3, 4]);
sortWithOneSwapOrNot([4, 1, 2, 3]);
