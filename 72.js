function stringInOtherStringOrNot(str1, str2) {
  if (str1.length === 0 || str2.length === 0) {
    console.log(`one or both of the given strings are empty.`);
    return;
    }
    
    str1 = str1.trim();
    str2 = str2.trim();

  if (str1.indexOf(str2) !== -1) {
    console.log(`"${str2}" present in "${str1}".`);
    return;
  } else if (str2.indexOf(str1) !== -1) {
    console.log(`"${str1}" present in "${str2}".`);
    return;
  } else {
    console.log(`"${str1}" not present in "${str2}" or vice-versa.`);
    return;
  }
}

stringInOtherStringOrNot("codezinger", "coder");
stringInOtherStringOrNot("find me", "");
stringInOtherStringOrNot("coder", "coderskm");
