const PI = 3.14;

let radius = 3;

let area = radius * radius * PI;

console.log(area);

radius = 20;

area = radius * radius * PI;

console.log(area);

const one = 1;
const two = '2';

let result = one * two;

console.log(result);

result = one + Number(two);

console.log(result);


let globalVariable = "I'm global";

function myFunction() {
    let blockVariable = "I am local or block level";
    console.log(blockVariable);
}

console.log(globalVariable);

myFunction();