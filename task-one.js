// question - 1: Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.

const multiply = (a, b, c) => a * b* c;

const result = multiply(1, 2, 3);
console.log(result);



// question -2: Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani.

const mySelf = `I am a web developer.
I love to code.
I love to eat biryani.
`
console.log(mySelf);



// question - 3: Write an arrow function that will take 2 parameter. Set one default parameter and add them and return.

const add = (x, y = 0) => x + y;

const sum = add(10);
console.log(sum);