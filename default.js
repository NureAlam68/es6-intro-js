// default --> if value is not provided, take this as a default.
//for number default value is 1 or 0


function add(num1 = 80, num2 = 0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
// const sum = add(5, 7);
const sum = add(5);





// default value for string is ''

function fullName(first, last = '') {
    const full = first + ' ' + last;
    return full;
}
// const name = fullName('Nure', 'Alam')
const name = fullName('Sohag');
console.log(name);



// for array default []

function friends(numbs = []) {

}



// for object default {}

function persin(human = {}) {
    
}