function copyArray(arr1) {
    let arr2 = [...arr1];
    console.log(`original array :- ${arr1}`);
    console.log(`copied array :- ${arr2}`);
    return;
}

copyArray([54, "Nikhil", true, 78.9]);