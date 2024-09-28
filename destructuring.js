const actor = {
    name: 'SRK',
    age: 56,
    phone: '01838384845222',
    money: 8585858585
}


// normal way to find name, age, phone 

// const name = actor.name;
// const age = actor.age;
// const phone = actor.phone;

// console.log(name);
// console.log(name);
// console.log(name);

// console.log(age);
// console.log(age);
// console.log(age);

// console.log(phone);
// console.log(phone);
// console.log(phone);



// destructuring object

// const {name, age, phone} = actor;

// console.log(name);
// console.log(name);
// console.log(name);

// console.log(age);
// console.log(age);
// console.log(age);

// console.log(phone);
// console.log(phone);
// console.log(phone);


const {name, phone:mobile, ...other} = actor;  //phone:mobile er mane phone er bodole mobile keyword set ...other er mane baki golo nia arekta object

console.log(name);
console.log(name);
console.log(name);


console.log(mobile);
console.log(mobile);
console.log(mobile);


console.log(other);


//array destructuring 

const number = [1, 2, 3, 4, 4];
const [first, second] = number;

console.log(first)
console.log(first)
console.log(first)

console.log(second);
console.log(second);
console.log(second);

const [x, y] = [44, 55];

console.log(x)
console.log(x)
console.log(x)


const [one, , three] = number;  //skiping second 

console.log(three);
console.log(three);
console.log(three);


// advance

function doubleThem(a, b) {
    return [a * 2, b * 2];
}
const [f, s] = doubleThem(2, 3);

console.log(f, s);


// swapping value

let n1 = 1;
let n2 = 2;

[n1, n2] = [n2, n1];

console.log(n1, n2);