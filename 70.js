function stringsRotationOfEachOther(str1, str2) {
    if (str1.trim().length === 0 || str2.trim().length === 0) {
        console.log(`one or both of the given strings are empty.`);
        return;
    }

    if (str1.length === str2.length && (str1 + str2).indexOf(str2) !== -1) {
        console.log(`given strings :- ${str1} and ${str2} are rotations of each other.`);
        return;
    } else {
        console.log(`given strings :- ${str1} and ${str2} are not rotations of each other.`);
        return;
    }
}

stringsRotationOfEachOther("codezinger", "zingercode");
stringsRotationOfEachOther("", "red");
stringsRotationOfEachOther("abcd","cdab")
stringsRotationOfEachOther("around","round")