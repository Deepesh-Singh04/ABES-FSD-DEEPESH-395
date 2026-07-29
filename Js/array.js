let arr = [1, 2, 3, 4, 5];
console.log("Original array:", arr);
console.log(Object.keys(arr));
console.log(Object.values(arr));
console.log(Object.entries(arr));
arr.push(6);
console.log("After pushing 6:", arr);
arr.pop();
console.log("After popping:", arr);