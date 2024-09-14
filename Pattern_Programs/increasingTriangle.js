let str = "";
let rows = 5; // Change this value for more or fewer rows

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        str += "* ";
    }
    str += "\n";
}
console.log(str);


//     *
//     * *   
//     * * *   
//     * * * * 
//     * * * * *
