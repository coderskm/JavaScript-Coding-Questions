function longestPalindromicSubstring(s) {
    if (s.length === 0) {
        console.log(`given string is empty.`);
        return;
    }
    let max = [0, 1];
    for (let i = 0; i < s.length; i++){
        let evenPalindrome = getlongestPalindrome(i - 1, i, s);
        let oddPalindrome = getlongestPalindrome(i - 1, i + 1, s);
        let currentMax = (evenPalindrome[1] - evenPalindrome[0]) > (oddPalindrome[1] - oddPalindrome[0]) ? evenPalindrome : oddPalindrome;
        max = (max[1] - max[0]) > (currentMax[1] - currentMax[0]) ? max : currentMax;
    }
    console.log(`longest palindromic string in ${s} :- ${s.slice(max[0], max[1])}`);
    return s.slice(max[0], max[1]);
}

function getlongestPalindrome(left, right, givenString) {
    while (left >= 0 && right < givenString.length) {
        if (givenString[left] !== givenString[right]) {
            break;
        }
        left--;
        right++;
    }
    return [left+1, right];
}

longestPalindromicSubstring("babad");
longestPalindromicSubstring("cbbd");
longestPalindromicSubstring("");
longestPalindromicSubstring("a");
longestPalindromicSubstring("ac");
