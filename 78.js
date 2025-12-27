function reverseCopyArray(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    console.log(`original array :- ${JSON.stringify(arr)}`);
    let reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--){
        reverseArr.push(arr[i]);
    }
    console.log(`reversed copy of array :- ${JSON.stringify(reverseArr)}`);
}

reverseCopyArray([78, -90, 25, -53, 81, -66, 42]);
reverseCopyArray([]);