const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const thrid = first;
/* if(first.a==second.a){
    console.log('equal');
}else{
    console.log('different');
}
 */

/* if(first === thrid){
    console.log('equal');
}else{
    console.log('different');
} */

// making string >(===) string cheek dewar somoy just value check kore
const firstStringify = JSON.stringify(first);
const secondStringify = JSON.stringify(second);
if (firstStringify === secondStringify) {
    // console.log('equal');
}
else {
    // console.log('Not Equal');
}

/*  if object property & value position are changed then stringify will not work > const first = {a: 1, b: 2}; const second = {b: 2, a: 1}; <
that's why bellow method is used */

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length != Object.keys(obj2).length) {
        return false;
    }
    for(const prop in obj1){
        if(obj1[prop] != obj2[prop]){
            return false;
        }
    }
    return true;
}

const compare = compareObjects(first, second);
console.log(compare);
