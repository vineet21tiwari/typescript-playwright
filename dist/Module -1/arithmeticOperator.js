"use strict";
// let number1 = 23
// let number2 = 30
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(`the sum is : ${number1+number2}`)
// console.log(`the differnece is : ${number1-number2}`)
// console.log(`the muliplication is : ${number1*number2}`)
// let divisionResult = number1/number2
// console.log(`the division is : ${divisionResult.toFixed(2)}`)
// console.log(`the remainder/modulo is : ${number1%number2}`)
//Q1 SuperMarket checkout
const ricePrice = 84;
const sugarPrice = 48;
const oilPrice = 165;
let riceQuantity = 5;
let sugarQuantity = 3;
let oilQuantity = 2;
let riceTotalPrice = ricePrice * riceQuantity;
let sugarTotalPrice = sugarPrice * sugarQuantity;
let oilTotalPrice = oilPrice * oilQuantity;
let subtotal = riceTotalPrice + sugarTotalPrice + oilTotalPrice;
const discount = 120;
const delieveryCharge = 45;
let finalAmount = subtotal - discount + delieveryCharge;
console.log(`
    Rice: Rs. ${riceTotalPrice}
    Sugar: Rs. ${sugarTotalPrice}
    Oil: Rs. ${oilTotalPrice}
    subtotal: Rs. ${subtotal}
    Discount: Rs. ${discount}
    Delivery: Rs. ${delieveryCharge}
    ---------------------------------
    Final Amount: Rs ${finalAmount}        
    `);
//# sourceMappingURL=arithmeticOperator.js.map