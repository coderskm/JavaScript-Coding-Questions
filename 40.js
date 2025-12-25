function closestOccurrencesDistance(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }

    let minNumber = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < minNumber) {
            minNumber = arr[i];
        }
    }

    let indexArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === minNumber) {
            indexArr.push(i);
        }
    }

    if (indexArr.length === 1) {
        console.log(`${minNumber} occurrs once.`);
        return;
    }

    let minDistance = Number.MAX_VALUE;
    for (let i = 0; i < indexArr.length; i++){
        if (indexArr[i + 1] - indexArr[i] < minDistance) {
            minDistance = indexArr[i + 1] - indexArr[i];
        }
    }

    console.log(`distance between two closest occurrence of ${minNumber} :- ${minDistance}.`);
    return;


}

closestOccurrencesDistance([91, 82, 37, 54, 21, 49, 12, 17]);
closestOccurrencesDistance([2, 2, 3, 4, 5, 7, 8, 0, 0]);
closestOccurrencesDistance([91, -82, 37, 54, 21, -82, 12, 17]);