// https://github.com/JahidJoni/Solving-with-JS


// kilometer to meter conversion code

function kilometerToMeter(kilometer) {
    //for invalid input
    if (kilometer < 0) {
        console.log("invalid input! Please enter positive numbers.");
    }
    // Assigning the rule of km to m conversion
    else {
        var meter = kilometer / 0.001;
        return meter;
    }
}
// calling the function
var input1 = kilometerToMeter(5);
console.log(input1);



//Budget calculator problem solve
function budgetCalculator(clock, phone, laptop) {

    if (clock < 0 || phone < 0 || laptop < 0) {
        return "Invalid Input";
    }
    else {
        //Calculate the budget of clock
        var clockPrice = 50;
        var clockCost = clock * clockPrice;
        //Calculate the budget of phone
        var phonePrice = 100;
        phoneCost = phone * phonePrice;
        //Calculate the budget of laptop
        var laptopPrice = 500;
        var laptopCost = laptop * laptopPrice;
        //Calculate the budget of total
        var totalCost = clockCost + phoneCost + laptopCost;
        return totalCost;
    }
}
//calling the calculator function
var myBudget = budgetCalculator(3, 3, 2);
console.log(myBudget);
//end of calculator code



//Third prblem, finding the hotel cost
function hotelCost(days) {
    //for invalid entry
    if (days <= 0) {
        return "Invalid Input";
    }

    //first ten days calculation
    else if (days <= 10) {
        var costOfTen = days * 100;
        console.log(costOfTen);
    }

    //After ten days 20tk will be discount for each days
    else if (days <= 20) {
        var costOfTweenty = (10 * 100) + (days - 10) * 80;
    }

    //After teweenty days 50tk will be discount for each days
    else {
        var costOfMore = (10 * 100) + (10 * 80) + (days - 20) * 50;
    }
    return [
        costOfTen,
        costOfTweenty,
        costOfMore
    ]
}
//calling the funtion
var input = hotelCost(21);
console.log(input);
//end of the hotel cost code



//Fourth problem solve. Mega friend code
function megaFriend(arr) {
    var templength = 0;
    var longest = [];

    //finding the length
    for (var i = 0; i < friendsName.length; i++) {
        if (templength < friendsName[i].length) {
            templength = friendsName[i].length;
        }
    }
    //swapping the longest string
    for (var j = 0; j < friendsName.length; j++) {
        if (friendsName[j].length == templength) {
            longest.push(friendsName[j]);
        }
    }
    if (longest.length == 1) {
        return longest[0]
    }
    else {
        return longest;
    }
}
//calling the funtion
var friendsName = ["Brad pitt", "Downey jr", "Chris evans", "Tom cruise", "Di caprio", "Dulquer Salman"];
console.log(megaFriend(friendsName));
//end of the mega friend code