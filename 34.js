function arrayPalindromicOrNot(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }

    let len = arr.length;
    let isPalindromic = true;
    for (let i = 0; i < len / 2; i++){
        if (arr[i] !== arr[len - i - 1]) {
            isPalindromic = false;
            break;
        }
    }

    if (isPalindromic) {
        console.log(`given array is Palindrome`);
        return;
    } else {
        console.log(`given array is not Palindrome`);
        return;
    }

}

arrayPalindromicOrNot([1, 2, 1]);
arrayPalindromicOrNot([1, 2, 5, 1, 7]);
arrayPalindromicOrNot([1, 2, 1, 2, 1]);
arrayPalindromicOrNot([]);