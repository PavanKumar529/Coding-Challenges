// function main() {
//     let a = 0;
//     let b = 1;
//     let n = 5;
//     let count = 1;

//     for (let i = 1; count <= n; i++) {
//         if (i % 2 !== 0) {
//             console.log(a);
//             count++;
//         }
//         let c = a + b;
//         a = b;
//         b = c;
//     }
// }

// main();

function alternateFibonacci(n) {
    let a = 0;
    let b = 1;
    let count = 0;
    
    console.log(a); // Print the first number
    count++;
    
    while (count < n) {
        let sum = a + b;
        a = b;
        b = sum;
        
        if (count % 2 !== 0) { // Print every alternate term
            console.log(a);
            count++;
        }
    }
}

let num = 10; // Change this value for a different number of alternate Fibonacci numbers
alternateFibonacci(num);



// function printAlternateFibonacci(n) {
//     let a = 0;
//     let b = 1;

//     // Print the first alternate Fibonacci number (index 0)
//     console.log(a);

//     // Track the number of alternate Fibonacci numbers printed
//     let count = 1;

//     while (count < n) {
//         // Calculate the next two Fibonacci numbers
//         let c = a + b;
//         a = b;
//         b = c;
//         c = a + b;
//         a = b;
//         b = c;

//         // Print the next alternate Fibonacci number
//         console.log(a);

//         // Increment the count
//         count++;
//     }
// }

// // Example usage
// printAlternateFibonacci(num);
