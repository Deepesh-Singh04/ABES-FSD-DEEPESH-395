const factorial = (n) => {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
const n = process.argv[2];
console.log(`Factorial of ${n} is ${factorial(n)}`);