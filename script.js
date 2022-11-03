// Homework 2.4

let base = 2;
let exp = 8;
let res = 1;

for (let i = 0; i < exp; i+=1) {
    res = res * base;
}
console.log(res);

// Homework 2.3

let result = "";
let length = 7;

for (let i = 1; i < length; i++) { 

    for (j = 0; j < i; j++) {
        result += "*";
    }

    result += "\n";
    } 
console.log(result);
