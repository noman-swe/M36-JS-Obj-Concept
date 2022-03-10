const student = {
    id: 101,
    name: 'Shibly',
    money: 5000,
    major: 'mathematics',
    isRich: 'false',
    subjects: ['english', 'economics', 'math101', 'calculas'],
    bestFriend:{
        name: 'kundu',
        major: 'mathematics',
    },
    takeExam: function(){
        console.log(this.name, 'taking exam');
    },

    treatDay: function(expense, tips){
        this.money = this.money - expense - tips;
        return this.money;
    }

}

// student.takeExam();
const remainingMoney1 = student.treatDay(3000, 100);
const remainingMoney2 = student.treatDay(500, 40);
const remainingMoney3 = student.treatDay(55, 10);
console.log(remainingMoney3);