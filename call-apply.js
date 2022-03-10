const shibly = {
    id: 101,
    name: 'Shibly',
    money: 5000,
    treatDay: function (expense, tips) {
        this.money = this.money - expense -tips;
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
    name: 'SakaLaka',
}

shibly.treatDay.call(alom, 500, 20);
shibly.treatDay.call(alom, 100, 10);
shibly.treatDay.call(normalMR, 40, 5);

// call() e jeta te function use korbo seta k 1st perameter hisheb e boshate hobe & oi existing function e je perameter guli thakbe se-guli k sequencely dite hobe;

// call() er kasaKasi ekta jinish holo apply(); call e seperation hoy (,) er ; but apply() e seperation hoy (objectName, [perameter, parameter])
shibly.treatDay.apply(normalMR, [70, 5])