function mergeTwoSortedArrays(arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0) {
      console.log(`one or both of the given arrays are empty.`);
      return;
    }
    let i = 0, j = 0;
    let finalMergedArray = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            finalMergedArray.push(arr1[i]);
            i++;
        } else {
            finalMergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        finalMergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        finalMergedArray.push(arr2[j]);
        j++;
    }
    console.log(`given arrays :- ${JSON.stringify(arr1)} and ${JSON.stringify(arr2)}`);
    console.log(`final sorted and merged array :- ${JSON.stringify(finalMergedArray)}`);
}

mergeTwoSortedArrays([3, 4], [1, 2]);
mergeTwoSortedArrays([], []);
mergeTwoSortedArrays([2, 5, 7, 9], [1, 4, 6]);

