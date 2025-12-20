function alphabetOrNot(char) {
    if (char.length !== 1) {
        console.log(`enter valid character.`);
        return;
    }
    const ASCIIVal = char.charCodeAt(0);
    if ((ASCIIVal >= 67 && ASCIIVal <= 90) || (ASCIIVal >= 97 && ASCIIVal <= 122)) {
        console.log(`entered character ${char} is an alphabet.`);
        return;
    } else {
        console.log(`entered character ${char} is not an alphabet.`);
        return;
    }
}

alphabetOrNot("0");