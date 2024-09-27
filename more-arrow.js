// Arrow function 3 types

//1: single or one parameter

const getAge = (person) => person.age;  //parameter with ()
const student = {name: 'Nure Alam', age: 23};
const age = getAge(student);

console.log(age);


const getSecond = numbers => numbers[1];
const second = getSecond([2, 3, 5, 7,]);

console.log(second);


const doubleIt = num => num * 2;
const double = doubleIt(2);

console.log(double);



// 2: no parameter

const getPi = () => Math.PI;
console.log(getPi());



// large arrow function return lekte hobe

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}
const result = doMath(1, 2, 3);
console.log(result);