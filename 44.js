function findIndexAfterSortingArr(arr, target) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            console.log(`index of target ${target} after array got sorted :- ${i}`);
            return;
        }
    }
    console.log(`${target} not present in array.`);
    return;
}

findIndexAfterSortingArr([34, 12, -76, 654, -98, 45, 23], 45);
findIndexAfterSortingArr([], 65);
findIndexAfterSortingArr([45, 12, -90, 76, -27], 11);