// 1. using object literal
const student = {name: 'sakib al hasan', job:'cricketer'};

// 2. constructor
const person = new Object();
// console.log(person);

// 3. 
// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.job);

// 4. create with class
class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const pep  = new People('Manush', 12)
// console.log(pep);

// function
function manush(name){
    this.name = name;
}
const man = new manush('Kader');
console.log(man);