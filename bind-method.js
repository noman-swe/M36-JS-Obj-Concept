const shibly = {
    id: 101,
    name: 'Shibly',
    money: 5000,
    treatDay: function (expense) {
        this.money = this.money - expense;
        console.log('lol',this);
        return this.money;
    }
}

const alom = {
    id: 102,
    money: 6000,
    name: 'Alom',
}

const normalMR = {
    id: 103,
    money: 1000,
    name: 'Alom',
}

shibly.treatDay(200);
const heroTreatDey = shibly.treatDay.bind(alom);
heroTreatDey(500);
heroTreatDey(200);
const normalMRtreatDey = shibly.treatDay.bind(normalMR);
normalMRtreatDey(700);
normalMRtreatDey(50);

/* 
note: method likhsi ekai & ekta object e but use kortesi onno sob object ew 
*/