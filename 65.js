function stringOperations(...str) {
    let appendedString = "";
    for (let i = 0; i < str.length; i++){
        if (str[i].trim().length === 0) {
            console.log(`given string is empty.`);
            return;
        }
        str[i] = str[i].trim();
        appendedString += str[i];
    }
    console.log(`appended string :- ${appendedString}`);
    return;
}

stringOperations("true", "detective", );
stringOperations("   ");
stringOperations("hard", "boiled");