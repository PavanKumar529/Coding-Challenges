// 1. Goal: Traverse the string and count vowels and consonants manually.
function countVowelsAndConsonents(str) {
    const vowels = "aeiouAEIOU"
    let vowelCount = 0;
    let consonentCount = 0;

    for(let i=0; i < str.length; i++) {
        let char = str[i];
        if((char >= "a" && char <= "z") || (char >= "A" && char <= "z")) {
            if(vowels.indexOf(char) !== -1) {
                vowelCount++;
            }
            else {
                consonentCount++
            }
        }
    }
    return { vowel: vowelCount, cononents: consonentCount }
}

console.log(countVowelsAndConsonents("hello world")); // Output: { vowels: 3, consonants: 7 }

console.log(countVowelsAndConsonents("Pavan Kumar")); // Output: { vowel: 4, cononents: 6 }



// 2. 
function countVowelsAndConsonants(str) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-z]/i)) {
            consonantCount++;
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}
console.log(countVowelsAndConsonants("hello world")); 
// Output: { vowels: 3, consonants: 7 }
