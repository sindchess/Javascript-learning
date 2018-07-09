var budget,
    nameShop;

budget = prompt('Укажите ваш бюджет:');
nameShop = prompt('Название магазина:');

var mainList = {
    budget : budget,
    nameShop : nameShop,
    shopGoods : [],
    employers : {},
    open : false
};

for (var i = 0; i < 3; i++) {
    mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать:');
}

// var j = 0;
// while (j < 3) {
//     mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать:');
// }
//
// j = 0;
// do {
//     mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать:');
// } while (j < 3);

alert(mainList.budget / 30);
console.log(mainList.shopGoods);