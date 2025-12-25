function deleteElementAtIndex(arr, k) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    if (k<0||k>=arr.length) {
        console.log(`index value not valid.`);
        return;
    }
    console.log(`array before deleting element :- ${JSON.stringify(arr)} `);
    for (let i = k; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    console.log(`array after deleting element :- ${JSON.stringify(arr)} `);
    return;

}

deleteElementAtIndex([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 3);
deleteElementAtIndex([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], -1);
deleteElementAtIndex([], 10);
deleteElementAtIndex([12, -90, 67, 23, -70, 87, 9], 7);