const Stack = require("./stack.js");


function isPalindrome(string) {
    string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    let stack = new Stack();
    for (let character of string) {
        stack.push(character);
    }
    for (let index in string) {
        console.log(string[index], stack.pop())
        if (string[index] !== stack.pop())
            return false
    }
    return true
}

function main() {
    //true, true, true, false
    console.log(isPalindrome("dad"));
    console.log(isPalindrome("A man, a plan, a canal: Panama"));
    console.log(isPalindrome("1001"));
    console.log(isPalindrome("Tauhida"));
}
main();