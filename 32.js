function arrayBalancedOrNot(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`)
        return;
    }
    let len = arr.length;
    let sum1 = 0;
    let sum2 = 0;
    let lowerIndex = 0;
    let upperIndex = 0;
    if (arr % 2 !== 0) {
        upperIndex = Math.ceil(len / 2);
    } else {
        upperIndex = len / 2;
    }

    for (let i = lowerIndex; i < upperIndex; i++){
        sum1 += arr[i];
    }
    for (let j = upperIndex; j < len; j++){
        sum2 += arr[j];
    }

    if (sum1 === sum2) {
        console.log(`array is balanced.`);
        return;
    } else {
        console.log(`array is not balanced.`);
        return;
    }

}

arrayBalancedOrNot([1, 3, 2, 4, 2, 1]);
arrayBalancedOrNot([1, 3, 2, 4, 2, 0]);
arrayBalancedOrNot([1, 3, 2, 1, 4, 2, 1]);
arrayBalancedOrNot([]);
