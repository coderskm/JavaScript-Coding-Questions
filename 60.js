function findElement(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    let sum = 0;
    let found = false;
    
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let value = Math.floor(sum / 2);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === value) {
            found = true;
            break;
        }
    }
    
    if (found) {
        console.log(`value found :- ${value}.`);
        return;
    } else {
        console.log(`value not found.`);
        return;
    }
}

findElement([23, 67, 12, 87, 67]);
findElement([]);
findElement([0, 2, 3, 5, 0]);