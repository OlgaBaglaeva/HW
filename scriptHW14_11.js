"Use strict";

// 4.3
let fibsArr = [1, 1];
let num = 15;

for (let i = 1; i <= num; i++) {
    fibsArr[i+1] = fibsArr[i] + fibsArr[i-1];
}
console.log(fibsArr);


// 4.4
// for
let x = [3, 10];
let y = [];
x[77] = 7;

for (let i = 0; i < x.length ; i++) {
    if (!isNaN(x[i])) {
        console.log(Math.pow(x[i], 2));
    }
}   

// for in
let x = [3, 10];
let y = [];
x[77] = 7;

for (let i in x) {
    y = Math.pow(x[i], 2);
    console.log(y);
}
 
// for of
let x = [3, 10];
let y = [];
x[77] = 7;

for (let i of x) {
    y = Math.pow(i, 2);
    console.log(y);
}
