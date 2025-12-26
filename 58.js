function linearSearch(arr, x) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === x) {
            console.log(`${x} found at index ${i} in array.`);
            return;
        }
    }
    console.log(`${x} not found in array.`);
    return;
}

linearSearch([23, -98, 35, -57, 78, -89, 64], 78);
linearSearch([]);
linearSearch([43, -80, 70, -114, 32, -178, 128], 29);
