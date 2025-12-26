function findAllPrimeNum(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    let max = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    let size = max;
    let primeNumTrackArr = new Array(size + 1).fill(1);
    let primeNums = [];    

    for (let i = 2; i * i <= size; i++){
        if (primeNumTrackArr[i] === 1) {
            for (j = i * i; j <= size; j += i) {
                primeNumTrackArr[j] = 0;
            }
        }
        
    }

    for (let i = 2; i < primeNumTrackArr.length; i++){
        if (primeNumTrackArr[i] === 1) {
            let state = arr.includes(i);
            if (state) {
                primeNums.push(i);
            } else {
                continue;
            }
        }
    }
    console.log(`original array :- ${JSON.stringify(arr)}`);
    console.log(`all prime numbers in array :- ${JSON.stringify(primeNums)}`);
    
}

findAllPrimeNum([45, 37, 73, 18, 89, 54, 71, 66, 23]);
findAllPrimeNum([]);