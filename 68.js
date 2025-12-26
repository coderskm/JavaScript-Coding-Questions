function findLength(str) {
    if (str.length === 0) {
        console.log(`given string is empty.`);
        return;
    }
    str = str.trim();
    let lengthOfString = 0;
    while (str[lengthOfString] !== undefined) {
        lengthOfString++;
    }
    console.log(`given string's "${str}" length :- ${lengthOfString}`);
    return;
}

findLength("phoenix");
findLength("");