"Use strict";

// 5.1

var s = "Мы знаем, что монохромный цвет - это градация серого";
var txt = "хром";
var word;
console.log (s.indexOf(txt)); 
word = s.slice(18, 22);
console.log(word);
 
// 5.2

let counter = [];
function substrCount(input, needle, offset, length) {
    
    let x = input.slice(needle);
     console.log(x);
    for (let i = offset; i <= length; i++) {
        if  (input[i] === x) {
            counter++; }
        }
    console.log(counter);
}
substrCount("Good Golly Miss Molly", "11", 7, 10);

// 5.3

function StrPad(input, fullLen, fillStr, fillType) {
   switch(fillType) {
       case 'FILL_LEFT': return  input.padStart(fullLen, fillStr);
       case 'FILL_BOTH': return  input.padStart(fullLen, fillStr).padEnd(fullLen, fillStr);
       default: return input.padEnd(fullLen, fillStr); 
}
}
console.log(StrPad('start', 10, '_*_'));
console.log(StrPad('start', 8, '_*_', 'FILL_LEFT'));
console.log(StrPad('start', 8, '*', 'FILL_BOTH')); 












