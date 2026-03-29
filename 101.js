function rotateString(s, goal){
    if(s.length===0 && goal.length===0){
        console.log("empty strings are rotation of each other");
        return;
    }
    if(s.length===0||goal.length===0){
        console.log("one of the given string is empty.");
        return;
    }
    if(s.length!==goal.length){
        console.log("given strings are not of equal length.");
        return;
    }

    s = s+s;
    if(s.includes(goal)){
        console.log(`${s} and ${goal} are rotation of each other.`);
        return;
    }else{
        console.log(`${s} and ${goal} are not rotation of each other.`);
        return;
    }
}

rotateString("","trynotto");
rotateString("abcde","cdeab");
rotateString("abcde","abced");
rotateString("","");
rotateString(";glkdjg;kds","trynotto");