function example() {
    "use strict";
    return true;
}

let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while(isNaN(money) || money == '' || money == null){
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++){
            let costName = prompt("Введите обязательную статью расходов в месяце", ""),
                costSum = prompt("Во сколько обойдется?","");
            if(
                typeof(costName) == 'string' && 
                typeof(costName) != null &&
                typeof(costSum) != 0 && 
                costName != '' && 
                costSum != '' && 
                costName.length < 50
            )
                {
                    appData.expenses[costName] = +costSum;
                }
            else {
                i--;
            }  
        }  
    },
    detectDayBudget: function(){
        let budgetForDay = (appData.budget/30).toFixed();
        alert("Ежедневный бюджет: " + budgetForDay);
        return budgetForDay;
    },
    detectLevel: function(){
        if (appData.budgetForDay <= 100){
            console.log('Минимальный уровень достатка'); 
        } else if (appData.budgetForDay > 100 && appData.budgetForDay < 2000) {
            console.log('Средний уровень достатка'); 
        } else if (appData.budgetForDay >= 2000){
            console.log('Высокий уровень достатка'); 
        }
        else {
            console.log('Ошибка!');  
        }
    },
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
                console.log(save);
                alert("Доход в месяц с вашего депозита " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i = 0; i < 3; i++){
            let costName = prompt("Статья необязательных расходов?", ""),
                costSum = prompt("Во сколько обойдется?","");
            if(
                typeof(costName) == 'string' && 
                typeof(costName) != null &&
                typeof(costSum) != 0 && 
                costName != '' && 
                costSum != '' && 
                costName.length < 50
            )
                {
                    appData.optionalExpenses[costName] = +costSum;
                }
            else {
                i--;
            }  
        }
    },
    chooseIncome: function(){
        let items = prompt('Что приносит доп доход? (Через запятую)', '');
        while (items === null){
            alert('Вы не ввели данные!');
            items = prompt('Что приносит доп доход? (Через запятую)', '');
        }
        while ((items == '') || (typeof(items) != 'string')){
            alert('Ошибка! Вы не ввели строку! Повторите ввод!');
            items = prompt('Что приносит доп доход? (Через запятую)', '');
        }

        appData.income = items.split(', ');

        items = prompt('Может что-то еще?');
        if (items != null){
            appData.income.push(items);
        }   
        appData.income.sort();

        console.log('Способы доп. заработка: ');
        appData.income.forEach(function(item, index){
            console.log(index + 1 + '. ' + item);
        });
    },
    dataPrint: function(){
        console.log('Наша программа включает в себя данные: ');
        for (let key in appData){
            console.log(key + ': ' + appData[key]);
        }
    }
};
