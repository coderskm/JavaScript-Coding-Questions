function evenNumberMadeOdd(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    console.log(`original array :- ${JSON.stringify(arr)}`);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            arr[i] += 1;
        }
    }
    console.log(`converting even number to odd array :- ${JSON.stringify(arr)}`);
    return;
}

evenNumberMadeOdd([45, 112, -3, 112, -67, 34, -90, -77]);
evenNumberMadeOdd([]);
evenNumberMadeOdd([56, 89, -34, 73, -114]);