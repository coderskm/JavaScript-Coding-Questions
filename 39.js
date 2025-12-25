function displayProduct(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    let prod = 1;
    for (let i = 0; i < arr.length; i++){
        prod *= arr[i];
    }
    console.log(`product of array elements :- ${prod}`);
}

displayProduct([1, 2, 3, 4, 5, 6, 7, 8, 9]);
displayProduct([1, -76, 56, -98, 4, -33]);
displayProduct([]);
