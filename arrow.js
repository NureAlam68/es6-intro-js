// function declaration or regular function

// function add (a, b){
//     const result = a + b;
//     return result;
// }


function add (a, b){
    return a + b;
}
const sum = add(5, 14);
console.log(sum);

// function expression 
const add2 = function(a, b){
    return a + b;
}
const sum2 = add2(5, 14);
console.log(add2);



// arrow function

const add3 = (a, b) => a + b;
const sum3 = add3(4, 14);

console.log(sum3);

// arrow function 
// const add3 = (a, b) => a + b;
// const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
// const multiply = (num1, num2) => num1 * num2;

const multiply = (num1, num2) => num1 * num2;
const mult = multiply(3, 4);

console.log(mult);