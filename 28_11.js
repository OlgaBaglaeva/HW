'Use strict';

// 6.1

function Product(title, year, price) {
    this.title = title;
    this.year = year;
    this.price = price;
}
const obj = new Product('sony', 2022, 550);

    Product.prototype.show = function() {
        console.log(obj.title);
        console.log(obj.price);
    };

obj.show();
console.log(obj);
