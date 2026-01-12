function stringPalindromicOrNot(str) {
  if (str.length === 0) {
    console.log(`given string is empty`);
    return;
  }

  let len = str.length;
  let isPalindromic = true;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      isPalindromic = false;
      break;
    }
  }

  if (isPalindromic) {
    console.log(`given string is palindrome`);
    return;
  } else {
    console.log(`given string is not palindrome`);
    return;
  }
}

stringPalindromicOrNot("nii");
stringPalindromicOrNot("nitin");
stringPalindromicOrNot("");
