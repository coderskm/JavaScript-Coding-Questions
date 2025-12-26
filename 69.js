function isogramOrNot(str) {
    if (str.trim().length === 0) {
        console.log(`given string is empty.`);
        return;
    }
    str = str.trim();
    let freq = {};
    for (let i = 0; i < str.length; i++){
        if (str[i].trim() === "") {
            continue;
        } else {
            freq[str[i]] = (freq[str[i]] || 0) + 1;
        }
    }

    for (let key in freq) {
        if (freq[key] > 1) {
            console.log(`given string "${str}" is not isogram.`);
            return;
        }
    }
    console.log(`given string "${str}" is isogram.`);
    return;
}

isogramOrNot("find the gun");
isogramOrNot("  ")
isogramOrNot("letter")
isogramOrNot("machine")