function groupAnagrams(strs) {
    const sortedStringArr = strs.map(word => 
         word.split('').sort().join('')
    )
    let hash = {};
    for (let i = 0; i < strs.length; i++){
        if (!hash[sortedStringArr[i]]) {
            hash[sortedStringArr[i]] = [strs[i]];
        } else {
            hash[sortedStringArr[i]].push(strs[i]);       
        }
    }
    console.log("all grouped anagrams of string array :- ", Object.values(hash));
    return;
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
groupAnagrams([""]);
groupAnagrams(["a"]);

