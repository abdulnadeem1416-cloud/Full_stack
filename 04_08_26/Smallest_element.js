const array = [10, 5 ,40 , 30, 15];
let largest = array[0];

array.forEach(num => {
    if (num < largest) {
        largest = num;
    }
});

console.log("Smallest element :", largest);