function absoluteDifference(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    let difference = Math.abs(arr[0] - arr[arr.length - 1]);
    console.log(`absolute difference between first and last array elements :- ${difference}`);
    return;
}

absoluteDifference([34, 87, -2, 65, -11]);
absoluteDifference([])