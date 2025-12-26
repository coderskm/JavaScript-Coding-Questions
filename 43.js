function findMedianOfSortedArrays(arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0) {
        console.log(`one or both of the given arrays are empty.`);
        return;
    }
    let i = 0, j = 0;
    let finalSortedArray = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            finalSortedArray.push(arr1[i]);
            i++;
        } else {
            finalSortedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        finalSortedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        finalSortedArray.push(arr2[j]);
        j++;
    }
    
    if (finalSortedArray.length % 2 !== 0) {
        let index = Math.floor(finalSortedArray.length / 2);        
        let median = finalSortedArray[index];
        console.log(`Median of ${JSON.stringify(finalSortedArray)} :- ${median}`);
        return;
    } else {
        let index = finalSortedArray.length / 2;
        let e1 = finalSortedArray[index];
        let e2 = finalSortedArray[index - 1];
        let median = (e1 + e2) / 2;
        console.log(`Median of ${JSON.stringify(finalSortedArray)} :- ${median}`);
        return;
    }
}

findMedianOfSortedArrays([3, 4, 5], [1, 2, 6]);
findMedianOfSortedArrays([3, 4], [1, 2]);
findMedianOfSortedArrays([]);