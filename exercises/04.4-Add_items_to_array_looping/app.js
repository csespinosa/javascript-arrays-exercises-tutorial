let arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************
arr.push(Math.floor(Math.random() * 100));

for (let index = 0; index < 9; index++) {
    arr.push(Math.floor(Math.random() * 100));
}
console.log(arr)