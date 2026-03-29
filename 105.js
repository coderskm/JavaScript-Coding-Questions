function allAnagrams(s, p) {
    if (s.length === 0 || p.length === 0) {
        console.log(`one or both of the givne strings are empty.`);
        return;
    }
    let result = [];
    let sTrackArray = new Array(26).fill(0);
    let pTrackArray = new Array(26).fill(0);

    for (let i = 0; i < p.length;i++){
        let index = p.charCodeAt(i) % 26;
        pTrackArray[index]++;
    }

    for (let i = 0; i < s.length; i++){
        let index = s.charCodeAt(i) % 26;
        sTrackArray[index]++;
        if (i > p.length - 1) {
            let headIndex = s.charCodeAt(i - p.length) % 26;
            sTrackArray[headIndex]--;
        }
        if (i >= p.length - 1) {
            if (checkArrayValuesEqualOrNot(sTrackArray, pTrackArray)) {
                result.push(i - (p.length - 1));
            }
        }
    }
    console.log(`starting index of anagrams of ${p} inside ${s} :- [${result}] `);
    return;
}

function checkArrayValuesEqualOrNot(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }    
    return true;
}

allAnagrams("cbaebabacd", "abc");
allAnagrams("abab", "ab");
allAnagrams("eriuoerwiuo", "");
allAnagrams("", "oui");

