const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleand: true,
} 
// to get all the property names
const keys = Object.keys(bottle);
// console.log(keys);

// get all values
const values = Object.values(bottle);
// console.log(values);

// getting all values in pairs by array
const pairs = Object.entries(bottle);
// console.log(pairs);

// sealing of a object 
Object.seal(bottle);
// bottle.price = 80;
// delete a property in a object
delete bottle.isCleand;
// console.log(bottle);


Object.freeze(bottle);
bottle.price = 80;
// delete a property in a object
delete bottle.isCleand;
console.log(bottle);

