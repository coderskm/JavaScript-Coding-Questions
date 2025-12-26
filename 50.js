function replaceWithGreatestElementOnLeft(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    console.log(`original array :- ${JSON.stringify(arr)}`);
    let max = arr[0];
    arr[0] = -1;
    for (let i = 1; i < arr.length; i++){
        if (max > arr[i]) {
            arr[i] = max;
        } else if (max <= arr[i]) {
            [arr[i], max] = [max, arr[i]];
        }
    }
    console.log(`array after replacing with greatest element on its left side :- ${JSON.stringify(arr)}`);

}

replaceWithGreatestElementOnLeft([4, 5, 2, 1, 7, 6]);
replaceWithGreatestElementOnLeft([54, 25, 72, 21, 47, 66]);
replaceWithGreatestElementOnLeft([]);
