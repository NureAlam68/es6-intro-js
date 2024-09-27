const first = 'Nure';
const second = 'Alam';
const nickName = 'Sohag';
// const fullName = first + ' ' + second + ' ' + nickName;
const fullName = `Nure Alam Sohag`; //using template

console.log(fullName);


const a = 20;
const b= 30;
// const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
const result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result);


const numbers = [45, 48, 98,78]
const student = {name: 'john ochena', age: 55}
// const math = `The sum of ${numbers[0]} and ${b} is ${a + b}`
const math = `The sum of ${numbers[0]} and ${student.age} is ${numbers[0] + student.age}`;
console.log(math);



// with out backtic \n means new line
const email = 'Hi john \n' + 
'cena cena lage \n'+
'tumi mara mari korba naki';
console.log(email);


//template string
const challenge = `John Cena
cena naki ochena
mair dimu prochur`;
console.log(challenge);