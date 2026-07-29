let arr = process.argv.slice(2).map(Number);
let sum = arr[0] + arr[arr.length - 1];
console.log("Sum of first and last element:", sum);