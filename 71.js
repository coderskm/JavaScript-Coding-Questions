function pangramOrNot(str) { 
    if (str.trim().length === 0) {
        console.log(`given string is empty`);
        return;
    }

    str = str.trim().toLowerCase();
    let trackPangramArray = new Array(26).fill(false);
    let index = -1;
    for (let i = 0; i < str.length; i++){
        if ('a' <=str[i] && str[i]<='z') {
            index = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
        } else {
            continue;
        }
        trackPangramArray[index] = true;

    }

    for (let i = 0; i < trackPangramArray.length; i++){
        if (trackPangramArray[i] === false) {
            console.log(`given string "${str}" is not pangram.`)
            return;
        }
    }
    console.log(`given string "${str}" is pangram.`);
    return;
}

pangramOrNot("  ");
pangramOrNot("the quick brown fox jumps over a lazy dog");
pangramOrNot("today you win and tomorrow you lose");
