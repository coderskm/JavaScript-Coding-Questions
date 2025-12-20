function ASCIIValue(char) {
    if (char.length !== 1) {
        console.log(`enter valid character.`);
        return;
    }
    const ASCIIVal = char.charCodeAt(0);
    console.log(`ASCII value of ${char} is ${ASCIIVal}.`);
    return;
}

ASCIIValue("Qe");