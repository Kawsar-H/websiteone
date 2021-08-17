function kilomiterToMeter(n) {
    var miter = n * 1000;
    return miter;
}
var fist = kilomiterToMeter(6);
console.log(fist);

function budgetCalculator(a, b, c) {
    var watchCost = a * 50;
    var phoneCost = b * 100;
    var laptopCost = c * 500;
    var totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;
}
var results = budgetCalculator(2, 3, 4);
console.log(results);

var day = 35;
if (day <= 10) {
    var hotelCost = day * 100;
    console.log(hotelCost);
}
else if (day <= 20) {
    var fristTenDayCost = 10 * 100;
    var remainingDay = day - 10;
    var remainingDayCost = remainingDay * 80;
    var hotelCost = fristTenDayCost + remainingDayCost;
    console.log(hotelCost);
}
else {
    var fristTenDayCost = 10 * 100;
    var secondTenDayCost = 10 * 80;
    var remainingDay = day - 20;
    var remainingDayCost = remainingDay * 50;
    var hotelCost = fristTenDayCost + secondTenDayCost + remainingDayCost;
    console.log(hotelCost);
}



var friendName =['Ali', 'Aman', 'shahrukkhan', 'Patowary' ]
var megaFriend = friendName[0];
for(var i = 0; i <= friendName.length; i++){
    var element =  friendName[i]
    if(element>megaFriend){megaFriend = element;}
}
console.log(megaFriend);