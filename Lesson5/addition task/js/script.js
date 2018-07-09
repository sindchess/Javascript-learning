let open = document.getElementById('open-btn'),
    nameValue = document.getElementsByClassName('name-value')[0],
    budgetValue = document.getElementsByClassName('budget-value')[0],
    goodsValue = document.getElementsByClassName('goods-value')[0],
    itemsValue = document.getElementsByClassName('items-value')[0],
    employersValue = document.getElementsByClassName('employers-value')[0],
    discountValue = document.getElementsByClassName('discount-value')[0],
    isopenValue = document.getElementsByClassName('isopen-value')[0],
    goodsItems = document.getElementsByClassName('goods-item'),
    goodsBtn = document.getElementsByTagName('button')[1],
    budgetBtn = document.getElementsByTagName('button')[2],
    employersBtn = document.getElementsByTagName('button')[3],
    chooseItem = document.querySelector('.choose-item'),
    timeValue = document.querySelector('.time-value'),
    countBudgetValue = document.querySelector('.count-budget-value'),
    hireEmployersItems = document.querySelectorAll('.hire-employers-item');



let money,
    name,
    price;

open.addEventListener('click', () => {
    do {
        money = prompt('Введите ваш бюджет');
    } while (isNaN(money) || money === '' || money === null);
    mainList.budget = money;
    budgetValue.textContent = money;

    nameValue.textContent = prompt('Введите название вашего магазина');
    mainList.name = nameValue
});

goodsBtn.addEventListener('click', () => {
   for (let i = 0; i < goodsItems.length; i++) {
       let temp = goodsItems[i].value;
       if (typeof(temp) === 'string' && typeof(temp) !== null && temp.length < 50) {
           console.log('Все верно');
           mainList.shopGoods[i] = temp;
           goodsValue.textContent = mainList.shopGoods;
       }else {
           i -= 1;
       }
   }
});


chooseItem.addEventListener('change', () => {
   let items = chooseItem.value;
   if (isNaN(items) && items !== '') {
       mainList.shopItems = items.split(',');
       mainList.shopItems.sort();
       itemsValue.textContent = mainList.shopItems;
   }
});


timeValue.addEventListener('change', () => {
   let time = timeValue.value;
   if (time < 0) {
       console.log('Такого не может быть');
       mainList.open = false;
   } else if (time > 8 && time < 20) {
       mainList.open = true;
   } else if (time < 24) {
       mainList.open = false;
       console.log('Уже слишком поздно');
   } else {
       console.log('В сутках только 24 часа');
       mainList.open = false;
   }

   if (mainList.open === true) {
       isopenValue.style.backgroundColor = 'green';
   }
});

budgetBtn.addEventListener('click', () => {
    if (!isNaN(mainList.budget)) {
        countBudgetValue.value = mainList.budget / 30;
    }
});


employersBtn.addEventListener('click', () => {
    for (let i = 0; i < hireEmployersItems.length; i++) {
        let name = hireEmployersItems[i].value;
        mainList.employers[i] = name;
        employersValue.textContent = mainList.employers;
    }
});
const mainList = {
    shopGoods : [],
    employers : [],
    open : false,
    shopItems : []
};