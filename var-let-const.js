// var : no reason to use var
// let : allow it to reassign
// const: do not allow it to reassign


const money = 25;
// money = 50;
// console.log(money); error dive
const rich = money + 25; //error dive na karon noton variable 
console.log(rich);


let count = 0;
count = count + 25;
console.log(count);



// const use korle array er modde value pop , push kora jave tove pora array change kora jave na


const numbers = [22, 44, 56, 78];
// numbers = [2, 55, 8, 9];
// console.log(numbers)
numbers[1] = 55;
numbers.push(8,9);
console.log(numbers);



//array er moto object er jonno const same way te use kora jabe

const student = {
    name: 'Sohag',
    age: 23
}

// student = {name: 'Nure Alam'}
// console.log(student);
student.name = 'Nure Alam';
console.log(student);


// loop
let sum = 0;
for(let i = 0; i < 10; i++) {
    // sum = sum + i;
    const num = i;
    sum = sum + num;
}
console.log(sum);