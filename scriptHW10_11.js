'use strict';

// 3.3

function compare(x) {
   
    return function(y) {
        if (y > x) {
            return 1;
        }
        if (y < x) {
            return -1;
        }
        if (y == x) {
            return null;
        }
    } 
}
    let z = compare(10);

console.log(z (25));

//  3.5
// Вот то, что смогла сделать. Понимаю, что нельзя сравнивать строку с числами, но как правильно задать условия не знаю ((
    
let lenght = 8; 
let result = "";
 
while (result <= lenght) {

for (let i = 0; i <= 3; i++) {
    result += "car";
}  

for (let j = 0; j <= 2; j++) {
    result += "bus";
} 
    if (result > 1) {
      result += '\t';
    }
    if (result >= lenght) {
     result += '\n';
}  
   
console.log(result.repeat(4));
}


// 3.6

function printNumbers(nums, cols) {
    let rows = nums / cols;
    for (let i = 1; i <= rows; i++) {
        let str = "";
        for (let j = 0; j < cols; j++) {
            str += i + (rows * j) +" ";
        } 
        console.log(str); 
    }
}
    printNumbers(12, 3);

// 4.1

const product1 = {};
    product1.name = "Laptop";
    product1.brand = "LG";
    product1.price = "1000";

for (let key in product1) {
    console.log ("Ключ: "  + key + ", " + "значение: " + product1[key]);
}

const product2 = {
    name: "Smartphone",
    brand: "Samsung",
    price: "2000",
};
for (let key in product2) {
    console.log ("Ключ: "  + key + ", " + "значение: " + product2[key]);
};


// 4.2


const product1 = {};
    product1.name = "Laptop";
    product1.brand = "LG";
    product1.price = "1000";
    product1.show = function() {
        console.log(this.name + "-" + this.price);
    }
    
for (let key in product1) {
    console.log ("Ключ: "  + key + ", " + "значение: " + product1[key]);}
    
const product2 = {
    name: "Smartphone",
    brand: "Samsung",
    price: "2000",
};
    product2.show = function showProduct(name, price) {
        console.log(this.name + "-" + this.price);
    } 

for (let key in product2) {
    console.log ("Ключ: "  + key + ", " + "значение: " + product2[key]);
};

product1.show();
product2.show();


