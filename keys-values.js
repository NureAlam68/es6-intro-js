const glass = {
    name: 'glass',
    color: 'white',
    price: 150
}

const keys = Object.keys(glass);
console.log(keys);

const values = Object.values(glass);
console.log(values);

const entries = Object.entries(glass);  //full object ke array of array banabe
console.log(entries);


// object thake property delete kora simple way
console.log(glass);

// delete glass.price;
// console.log(glass);

// delete using destructuring

const {price, ...shortGlass} = glass; // price bade baki gola nia new object 
console.log(shortGlass);


// freeze: can not change value , do not add or remove property

// Object.freeze(glass);

// glass.source = 'USA';
// glass.price = 500;
// delete glass.name;

// console.log(glass);



// seal: can change value, do not add or remove property


Object.seal(glass);

glass.source = 'USA';
glass.price = 500;
delete glass.name;

console.log(glass);

