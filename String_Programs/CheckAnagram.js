// let str1 = "cal";
// let str2 = "acl";

// let str1 = "ball";
// let str2 = "bal";

let str1 = "silent";
let str2 = "listen";

// let str1 = "cat";
// let str2 = "dog"

// 1.
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



// 2.
function CheckAnagram(str1, str2) {
  //   To remove space and make lowercase
  str1 = str1.trim().toLowerCase();
  str2 = str2.trim().toLowerCase();

  if (str1.length !== str2.length) return false;

  let countStr1 = findOccurrence(str1);
  let countStr2 = findOccurrence(str2);

  function findOccurrence(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]]) {
        obj[str[i]] = obj[str[i]] + 1;
      } else {
        obj[str[i]] = 1;
      }
    }
    return obj;
  }

  for (let key in countStr1) {
    if (countStr1[key] !== countStr2[key]) return false;
  }
  return true;
}

console.log(CheckAnagram(str1, str2));


