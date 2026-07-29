let arr = [];
for (let i = 1; i <= 5; i++) {
    arr.push(parseInt(process.argv[i + 1]));
}
console.log("Original array:", arr);
console.log(Object.keys(arr));
console.log(Object.values(arr));
console.log(Object.entries(arr));
arr.push(6);
console.log("After pushing 6:", arr);
arr.pop();
console.log("After popping:", arr);