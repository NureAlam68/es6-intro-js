// for of use in Array and String

// for in use in Object


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(const num of numbers) {
    // console.log(num);
}


const name = 'Nure Alam Sohag';

for(const char of name) {
    // console.log(char);
}



const glass = {
    name: 'glass',
    color: 'white',
    price: 150
}


for(const key in glass) {
    const value = glass[key]; // glass object er value bracket notation diye 
    // console.log(key, value);
}


// object a for of loop chalano :

const keys = Object.keys(glass); // keys array hobe

for(const key of keys) {
    const value = glass[key];
    console.log(key, value);
}