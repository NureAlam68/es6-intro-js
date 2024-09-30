/*
    question: Write an arrow function where it will do the following:

    1. It will take an array elements will be the name of your friends.

    2. Check if the length of each element is even, push elements with even length to a new array and return the result.
*/


const friends = ["Nure", "Sohag", "Nihali", "Sazzad", "Saymon"];

const newFriend = (names) => {
    const newArray = [];

    for(let name of names) {
        if(name.length % 2 === 0) {
            newArray.push(name);
        }
    }
    return newArray;
}
const result = newFriend(friends);
console.log(result);