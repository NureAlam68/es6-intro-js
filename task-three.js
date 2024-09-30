/*
    question: Write an arrow function were it will do the following: x^2

    1: square each array element

    2: calculate the sum of the squared elements

    return the average of the sum of the squared elements

*/



const array = [1, 2, 3, 4, 5];

const arrayAvg = (numbers) => {
    let sum = 0;

    for(let num of numbers) {
        let square = num * num;
        sum += square;
    }
    const average = sum / numbers.length;
    return average;
}
const result = arrayAvg(array);
console.log(result);