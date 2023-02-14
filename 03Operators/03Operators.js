var num1 = 5;
var num2 = 6;
console.log(num1 + num2);
var answer = num1 > num2;
console.log(answer);

var sellingPrice = 199;
var listingPrice = 799;
var discount = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log(discount);
displayDiscountPercentage = Math.round(discount);
console.log(displayDiscountPercentage);
var result = listingPrice > sellingPrice;
console.log(typeof result); //returns boolean
