function freqOfChars(str) {
    if (str.trim().length === 0) {
        console.log(`given string is empty.`);
        return;
    }
    str = str.trim();
    let freq1 = {};
    for (let i = 0; i < str.length; i++){
        if (str[i].trim() === "") {
            continue;
        } else {
            freq1[str[i]] = (freq1[str[i]] || 0) + 1;
        }
    }
    console.log(`frequency of characters in given string ${str} :-`);
    for (let key in freq1) {
        console.log(`${key} appears ${freq1[key]} times.`)
    }
}

freqOfChars("once upon a time in hollywood");
freqOfChars("the shawshank redemption");
freqOfChars("    ");
freqOfChars("and justice for all");