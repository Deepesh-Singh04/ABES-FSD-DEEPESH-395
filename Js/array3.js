let arr = process.argv.slice(2);    
console.log("Original array:", arr);
for(let i = 0; i< arr.length; i++){
    console.log(`Element at index ${i}:`, arr[i]);
}