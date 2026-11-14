//Q01 Supermarket Checkout

let riceQuantity = 5;
let sugarQuantity = 3;
let oilQuantity = 2;

let ricePrice = 84;
let sugarPrice = 48;
let oilPrice = 165;

let riceCost = ricePrice * riceQuantity;
let sugarCost = sugarPrice * sugarQuantity;
let oilCost = oilPrice * oilQuantity;

let subtotal = riceCost + sugarCost + oilCost;

let discount = 120;

let subtotalAfterDiscount = subtotal - discount;

let deliveryCharge = 45;

let total = subtotalAfterDiscount + deliveryCharge;

console.log("=======Super Market Receipt=======");
console.log("Rice-------------------" + "RS." + riceCost)
console.log("Sugar------------------" + "RS." + sugarCost)
console.log("Oil--------------------" + "RS." + oilCost)
console.log("=============================")
console.log("Subtoal----------------" + "Rs." + subtotal)
console.log("Discount---------------" + "Rs." + discount)
console.log("=============================")
console.log("Subtoal after discount-" + "Rs." + subtotal)
console.log("Delivery charge--------" + "Rs. " + deliveryCharge)
console.log("=============================")
console.log("Total------------------" + "Rs." + total)

//Q02: Five-Subject Report Card

let mathScore: number  = 86;
let englishScore: number  = 79;
let scienceScore: number  = 91;
let socSciScore: number  = 83;
let computerScore: number  = 96;

let numOfSubject: number = 5;

let totalScore: number = (mathScore+englishScore+scienceScore+socSciScore+computerScore);
let averageScore: number = totalScore/numOfSubject;

let scorePercentage: number = (totalScore/500)*100;

let extraScoreTo450: number = 450-totalScore;

console.log();
console.log("=========Report Card============");
console.log("Name: ");
console.log("-----------Marks----------------")
console.log("Math:                 " + mathScore);
console.log("English:              " + englishScore);
console.log("Science:              " + scienceScore);
console.log("Social Science:       " + socSciScore);
console.log("Computer:             " + computerScore);
console.log("-------------------------------")

console.log("Total Marks:          " + totalScore);
console.log("Average Marks:        " + averageScore);
console.log("Percentage:           " + scorePercentage+"%");


//Q03: Cinema Ticket Receipt

let adultTicket: number = 320;
let childTicket: number = 180;
let numOfAdult: number = 3;
let numofChild: number = 2;

let adultTicketFee = adultTicket*numOfAdult;
let childTicketFee = childTicket*numofChild;

let bookingFee: number = 25;
let totalBookingFee = (numOfAdult+numofChild)*bookingFee

let totoalTicketFee = adultTicketFee+childTicketFee+totalBookingFee;

let coupon: number = 150;

let totoalTicketFeeLessDiscount = totoalTicketFee - coupon;

console.log();
console.log("Total Ticket Fee Before Discount: " + totoalTicketFee);
console.log("Coupon Discount: " +150);
console.log("Total Ticket Fee After Discount: " +totoalTicketFeeLessDiscount);

//Q04: Time Converter

const totalSeconds = 9785
const hours = Math.floor(totalSeconds/3600);
const minutes = Math.floor((totalSeconds%3600)/60);
const seconds = totalSeconds%60

console.log();
console.log("The test is " + hours +" hours "+minutes+ " minutes "+ seconds + " seconds long.");

