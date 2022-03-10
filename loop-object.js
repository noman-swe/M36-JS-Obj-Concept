const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleand: true,
} 


/* 
for(let i=0, i < 10, i++){}
for (const num of numbers){} //apply in array
for( const prop in student){} //apply in object
*/
for(const property in bottle){
    // property name
    console.log('property name:',property);
    //property values
    console.log('property values:',bottle[property]);
    // name & values
    console.log('property name & values:', property, bottle[property]);
}


const keys = Object.keys(bottle);
console.log(keys); //- getting the property name
for(const property of keys){
    console.log(property, bottle[property]);
}


//entries (Advanced)
const entries = Object.entries(bottle);
console.log(entries);

for(const [key, value] of Object.entries(bottle)){
console.log(key, value);
}