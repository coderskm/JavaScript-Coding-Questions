function hiddenNumber(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    if (sum % arr.length !== 0) {
        console.log(`No hidden number in given array.`);
        return;
    } 
    let hiddenNumber = sum / arr.length;
    console.log(`Hidden number in given array :- ${hiddenNumber}`);
    return;
}

hiddenNumber([1, 2, 1, 3]);
hiddenNumber([]);
hiddenNumber([3, 4, 2, 1, 20]);
