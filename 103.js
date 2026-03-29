function longestNonRepeatingSubstring(s) {
  if (s.length === 0) {
    console.log("given string is empty.");
    return;
  }

  let start = 0;
  let maxLength = 0;
  let stringTracker = {};

  for (let end = 0; end < s.length; end++) {
    let strChar = s[end];
    stringTracker[strChar] = (stringTracker[strChar] || 0) + 1;
    while (stringTracker[strChar] > 1) {
      let strChar = s[start];
      if (stringTracker[strChar] > 1) {
        stringTracker[strChar]--;
      } else {
        delete stringTracker[strChar];
      }
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  console.log(
    `length of longest substring without repeating characters :- ${maxLength}`,
  );
  return;
}

longestNonRepeatingSubstring("abcabcbb");
longestNonRepeatingSubstring("");
longestNonRepeatingSubstring("bbbbb");
longestNonRepeatingSubstring("pwwkew");
