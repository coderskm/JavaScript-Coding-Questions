function reverseArray(arr) {
    if (arr.length === 0) {
      console.log(`array cannot be empty.`);
      return;
    }

    console.log(`original array :- ${arr}`);
    for (let i = 0, j = arr.length - 1;i<j ; i++,j--){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(`reversed array :- ${arr}`);
}

reverseArray([67, -12, 89, -34, 47, -25]);
reverseArray([]);