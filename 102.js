function longestKDistictCharsSubString(s,k){
if(s.length===0){
    console.log("given string is empty.");
    return;
}

if(k<1){
    console.log("given value K should be greater than 0.");
    return;
}

let maxLength = 0;
let start = 0;
let stringTracker = {};

for(let end = 0;end<s.length;end++){
    let strChar = s[end];
        stringTracker[strChar] = (stringTracker[strChar]||0) + 1;
    while(Object.keys(stringTracker).length>k){
        let strChar = s[start];
        if(stringTracker[strChar]>1){
            stringTracker[strChar] = stringTracker[strChar] - 1;
        }else{
            delete stringTracker[strChar];
        }
        start++;
    }
    maxLength = Math.max(maxLength, (end-start)+1);
}
console.log(`length of longest substring with at most ${k} distinct characters :- ${maxLength}`);
return;
}

longestKDistictCharsSubString("eceba",2);
longestKDistictCharsSubString("aa",1);
longestKDistictCharsSubString("abcdskjh",-3794);
longestKDistictCharsSubString("",78);


