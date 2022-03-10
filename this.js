// console.log(this);
const shelby = {
    id: 101,
    name: 'Shibly',
    money: 500,
    treatDeyArrow: () => {
        console.log(this);
    },
    treatdeInside: function(){
       const myArrow = () => {
           console.log(this);
           myArrow();
       } 
    },
    treatDay: function (expense, tips) {
        this.money = this.money - expense -tips;
        console.log('lol',this);
        return this.money;
    }
}

function add(){
    console.log(this);
}