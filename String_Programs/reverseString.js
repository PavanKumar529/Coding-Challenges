function reverseString(str) {
    let reversed = '';
    for(let i=str.length-1; i>=0; i--) {
        reversed += str[i]
        // console.log(reversed );        
    }
    return reversed;
}

console.log(reverseString("hello"));


function reversedString(str) {
    return str.split('').reverse().join('');
}
console.log(reversedString("Pavan")); // Output: "olleh"
