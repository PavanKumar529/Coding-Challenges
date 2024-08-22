function main() {
    let a = 0;
    let b = 1;
    let n = 11;

    for (let i = 1; i <= n; i++) {
        console.log(a);
        let c = a + b;
        a = b;
        b = c;
    }
}

main();


function fibonacci(n) {
    let a = 0, b = 1, nextTerm;
    let result = "";

    if (n >= 1) result += a;
    if (n >= 2) result += ", " + b;

    for (let i = 3; i <= n; i++) {
        nextTerm = a + b;
        result += ", " + nextTerm;
        a = b;
        b = nextTerm;
    }
    return result;
}

// Example usage
let numTerms = 11; // Change this to prompt("Enter the number of terms in the Fibonacci sequence") for user input
let fibonacciSequence = fibonacci(numTerms);
console.log(`The first ${numTerms} terms of the Fibonacci sequence are: ${fibonacciSequence}`);



function main()
    {
          let a=0;
          let b=1;
          let c=2;
          for(i=1;i<=10;i++)
          {
            console.log(a)
            d=c+a+b;
            a=b;
            b=c;
            c=d;
          }

    }main();