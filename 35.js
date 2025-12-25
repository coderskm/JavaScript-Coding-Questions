function countArrayElements(arr) {
    if (arr.length === 0) {
      console.log(`given array is empty.`);
      return;
    }

    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    for (let i = 0; i < arr.length; i++){
        if ((sum - arr[i]) % arr[i] === 0) {            
          count++;
        } 
    }

    console.log(`total array elements which divide sum of all other array elements :- ${count}`);
    return;
}

countArrayElements([34, 12, 67, 89, 1]);
countArrayElements([]);
countArrayElements([3, 10, 4, 6, 7]);
