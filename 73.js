function isSuffix(str1, str2) {
  if (str1.trim().length === 0 || str2.trim().length === 0) {
    console.log(`one or both of the given strings are empty.`);
    return;
  }
  str1 = str1.trim();
  str2 = str2.trim();

  let len1 = str1.length;
  let len2 = str2.length;
  let isSuffix = true;
  if (len1 < len2) {
    for (let i = 0; i < len1; i++) {
      if (str1[len1 - i - 1] !== str2[len2 - i - 1]) {
        isSuffix = false;
        break;
      }
    }
    if (isSuffix) {
      console.log(`${str1} is suffix of ${str2}.`);
      return;
    } else {
      console.log(`${str1} is not suffix of ${str2}.`);
      return;
    }
  } else {
    for (let i = 0; i < len2; i++) {
      if (str2[len2 - i - 1] !== str1[len1 - i - 1]) {
        isSuffix = false;
        break;
      }
    }
    if (isSuffix) {
      console.log(`${str2} is suffix of ${str1}.`);
      return;
    } else {
      console.log(`${str2} is suffix of ${str1}.`);
      return;
    }
  }
}

isSuffix("", "automatically");
isSuffix("doomed", "abandoned");
isSuffix("throat", "  ");
isSuffix("sulking", "king")
isSuffix("fing", "surfing")

