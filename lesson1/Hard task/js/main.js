var num = 33721;
var production = 1;

while (num > 0) {
    production *= num % 10;
    num = Math.floor(num / 10);
}

console.log(production);

var newProduction = production;
for (var i = 0; i < 2; i++) {
    newProduction *= production;
}

console.log(newProduction);