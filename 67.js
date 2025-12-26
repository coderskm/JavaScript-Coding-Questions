function reverseString(str) {
    if (str.trim().length === 0) {
        console.log(`given string is empty.`);
        return;
    }
    str = str.trim();
    console.log(`original string :- ${str}`);
    let reverseString = "";
    for (let i = str.length-1; i >=0; i--){
        reverseString += str[i];
    }
    console.log(`reversed string :- ${reverseString}`);
}

reverseString("  going to office");
reverseString("the dead zone");
reverseString("   ");