const Stack = require("./stack.js");
function peek(stack) {
    const top = stack.pop();
    stack.push(top);
    return top;
}

function isEmpty(stack) {
    return peek(stack) === null;
}

function display(stack) {
    const temp = new Stack();
    if (isEmpty(stack)) return console.log('adgh');
    let item = stack.pop();
    let string = '['
    while (item !== null) {
        string += `${item}, `;
        temp.push(item);
        item = stack.pop();
    }
    item = temp.pop();
    while (item !== null) {
        stack.push(item);
        item = temp.pop();
    }
    return string.substring(0, string.length-2)+']';
}


function isPalindrome(string) {
    string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    let stack = new Stack();
    for (let character of string) {
        stack.push(character);
    }
    for (let index in string) {
        if (string[index] !== stack.pop())
            return false
    }
    return true
}
function sortStack(stack){
    let tempStack = new Stack();

     while (!isEmpty(stack)) {
         let item = stack.pop();

         while(!isEmpty(tempStack) && peek(tempStack) > item) {
             stack.push(tempStack.pop());
         }
         tempStack.push(item);
     }
    let item = tempStack.pop();
    while (item !== null) {
        stack.push(item);
        item = tempStack.pop();
    }
}
function main() {
    //true, true, true, false
    // console.log(isPalindrome("dad"));
    // console.log(isPalindrome("A man, a plan, a canal: Panama"));
    // console.log(isPalindrome("1001"));
    // console.log(isPalindrome("Tauhida"));


    let newStack = new Stack();
    newStack.push('A');
    newStack.push('Butter');
    newStack.push('Green');
    newStack.push('C');
    newStack.push('F');
    console.log(display(newStack));
    sortStack(newStack);
    console.log(display(newStack));
}
main();