function replaceWithPreviousElement(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }

    console.log(`original array :- ${JSON.stringify(arr)}`);
    for (let i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i - 1];
    }
    arr[0] = -1;
    console.log(`array after replacing every element with previous element :- ${JSON.stringify(arr)}`);
    return;
}

replaceWithPreviousElement([34, -12, 56, -67, 89, -190]);
replaceWithPreviousElement([]);
