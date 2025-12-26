function swapStrings(str1, str2) {
    if (str1.trim().length === 0 || str2.trim().length === 0) {
        console.log(`one or both of the given strings are empty.`);
        return;
    }
    str1 = str1.trim();
    str2 = str2.trim();
    console.log(`strings before swapping :- \n 1st string :- ${str1} \n 2nd string :- ${str2}`);
    [str1, str2] = [str2, str1];
    console.log(`strings after swapping :- \n 1st string :- ${str1} \n 2nd string :- ${str2}`);

}

swapStrings("find", "me");
swapStrings("stand by me", "a few good men");
swapStrings("", "  ");