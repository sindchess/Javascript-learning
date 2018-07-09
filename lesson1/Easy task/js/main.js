var budget,
    nameShop;

budget = prompt('Укажите ваш бюджет:');
nameShop = prompt('Название магазина:');

var mainList = {
    budget : budget,
    nameShop : nameShop,
    shopGoods : [],
    employers : {},
    open : function(){}
};

for (var i = 0; i < 3; i++) {
    mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать:');
}

alert(budget / 30);
console.log(mainList.shopGoods);