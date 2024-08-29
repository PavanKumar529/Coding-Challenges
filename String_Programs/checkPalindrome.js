// 1
function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while(start < end) {
        if(str[start] !== str[end]) {
            return `${str} is not a Palindrome`;
        }
        start++;
        end--;
    }
    return `${str} is a Palindrome`;
}

console.log(isPalindrome("radar")); // radar is a Palindrome

console.log(isPalindrome("hello")); // `hello is not a Palindrome


// 2
function checkPalindrome(str) {
    let reversed = str.split("").reverse().join("")
    return reversed === str
}
console.log(checkPalindrome("hello")); // Output: false

console.log(checkPalindrome("ababa")); // Output: true
