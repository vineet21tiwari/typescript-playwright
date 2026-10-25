// let number1 = 23
// let number2 = 30

// console.log(`the sum is : ${number1+number2}`)
// console.log(`the differnece is : ${number1-number2}`)
// console.log(`the muliplication is : ${number1*number2}`)
// let divisionResult = number1/number2
// console.log(`the division is : ${divisionResult.toFixed(2)}`)
// console.log(`the remainder/modulo is : ${number1%number2}`)

//Q1 SuperMarket checkout

const ricePrice: number = 84
const sugarPrice: number = 48
const oilPrice: number = 165

let riceQuantity: number = 5
let sugarQuantity: number = 3
let oilQuantity: number = 2

let riceTotalPrice: number = ricePrice*riceQuantity
let sugarTotalPrice: number = sugarPrice*sugarQuantity
let oilTotalPrice: number = oilPrice*oilQuantity

let subtotal: number = riceTotalPrice + sugarTotalPrice + oilTotalPrice
const discount: number = 120
const delieveryCharge: number = 45

let finalAmount: number = subtotal - discount + delieveryCharge

console.log(
    `
    Rice: Rs. ${riceTotalPrice}
    Sugar: Rs. ${sugarTotalPrice}
    Oil: Rs. ${oilTotalPrice}
    subtotal: Rs. ${subtotal}
    Discount: Rs. ${discount}
    Delivery: Rs. ${delieveryCharge}
    ---------------------------------
    Final Amount: Rs ${finalAmount}        
    `
)

