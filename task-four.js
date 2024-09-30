/*
    question: Write an arrow function where it will do the following:

    1: It will take two array inputs

    2: Combine the two arrays and assign them in a new array

    3: Find the maximum number from the new array and return the new result
*/


const array1 = [1, 2, 30, 4, 5];
const array2 = [6, 97, 8, 9];

const maxNumber = (x, y) => {
    const combineArray = [...x, ...y];
    const maxNum = Math.max(...combineArray);
    return maxNum;
}
const result = maxNumber(array1, array2);
console.log(result);