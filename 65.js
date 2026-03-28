function stringOperations(...str) {
    let appendedString = "";
    for (let i = 0; i < str.length; i++){
        if (str[i].trim().length === 0) {
            continue;
        }
        str[i] = str[i].trim();
        appendedString += str[i];
    }
    if(appendedString.length===0){
        console.log("no string found");
        return;
    }
    console.log(`appended string :- ${appendedString}`);
    return;
}

stringOperations("","true", "detective");
stringOperations("   ");
stringOperations("hard", "boiled");