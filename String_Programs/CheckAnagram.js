// let str1 = "cal";
// let str2 = "acl";

// let str1 = "ball";
// let str2 = "bal";

let str1 = "silent";
let str2 = "listen";

// let str1 = "cat";
// let str2 = "dog"

function checkAnagram(str1, str2) {
    let word1 = str1.toLowerCase();
    let word2 = str2.toLowerCase();

    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");

    if(sortedStr1.length !== sortedStr2.length) return false || "This is not Anagram"
    if(sortedStr1 === sortedStr2) return true || "This is a Anagram"
    else return false || "This is not Anagram"
}

console.log(checkAnagram(str1, str2));
