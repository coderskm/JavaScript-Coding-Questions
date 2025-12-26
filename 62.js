function anagramOrNot(str1, str2) {
  if (str1.trim().length === 0 || str2.trim().length === 0) {
    console.log(`one or both of given strings are empty.`);
    return;
  }
  if (str1.length !== str2.length) {
    console.log(`length of both strings are not equal. So not an anagram.`);
    return;
  }

  str1 = str1.trim();
  str2 = str2.trim();

  let freq1 = {},
    freq2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (str1[i].trim() === "") {
      continue;
    } else {
      freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2[i].trim() === "") {
      continue;
    } else {
      freq2[str2[i]] = (freq2[str2[i]] || 0) + 1;
    }
  }
  for (let key in freq1) {
    if (!freq2[key] || freq1[key] !== freq2[key]) {
      console.log(`given strings ${str1} and ${str2} are not anagrams.`);
      return;
    }
  }
  console.log(`given strings ${str1} and ${str2} are anagrams.`);
  return;
}

anagramOrNot("brown", "norway");
anagramOrNot("try me out", "  ");
anagramOrNot("listen", "silent");
anagramOrNot("deadly", "kinkly");
