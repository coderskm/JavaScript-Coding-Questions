function validParentheses(s){
if(s.length===0){
    console.log("given string is empty.");
    return;
}

let stack = [];
let validParenthesesString = "() {} []";

let i = 0;

while(i<s.length){
    stack.push(s[i]);
    i++;

    let open = stack[stack.length-2];
    let close = stack[stack.length-1];
    
    let testParenthesesString = open+close;
    
    if(validParenthesesString.includes(testParenthesesString)){
        stack.pop();
        stack.pop();
    }
}

if(stack.length===0){
    console.log("string has valid parentheses");
    return;
}else{
    console.log("string has invalid parentheses");
    return;
}



}

validParentheses("(");
validParentheses("()");
validParentheses("()[]{}");
validParentheses("(]");
validParentheses("([)]");
