const max = Math.max(1, 2, 4, 66, 444, 7, 9000);
console.log(max);

const numbers = [2, 44, 556, 444, 2000, 4];
console.log(...numbers);

// array thke max number ber korte ... na dile NaN output asbe

// const arrayMax = Math.max(numbers);
const arrayMax = Math.max(...numbers);
console.log(arrayMax);


// copy without spread operator: not work properly

const num1 = [1, 2, 3, 4];
const num2 = num1;
num2.push(5);

console.log(num1);
console.log(num2);


//copy with spread operator

const n1 = [1, 2, 3, 4];
const n2 = [...n1];
n2.push(5);

console.log(n1);
console.log(n2);


//advance 

const num = [...n1, 99]; //add extra elements while copy 
console.log(num);


let a = ['Nure', 'Alam'];
console.log(...a);