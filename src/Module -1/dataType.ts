// // // we explicitely tell typescript what each variable's data type should be
// // let studentName: string  = "John" ;
// // let city: string = "NewYork";
// // let age: number = 25;
// // let isPassed: boolean = true;




// // //typescript understands the types automatically from the values , this is called type inference.
// // let studentName1: string  = "Martin" ;
// // let age1 = 28;
// // let city1 = "chicago";
// // let isPassed1= true;


// // console.log("explicit studentName : ", studentName, " and implicit studentName : ", studentName1)

// // let studentMarks: number | undefined;
// // console.log(studentMarks)

// let totalAmount: number = 2000
// let bookPrice: number  = 650
// let notebookPrice: number = 120

// let totalExpenditure: number = bookPrice + notebookPrice
// let remainingBalance: number = totalAmount - totalExpenditure

// console.log("Total Expenditure : ", totalExpenditure)
// console.log("Remaining Balance : ", remainingBalance )
// console.log("Remaining Balance after 300 spend extra: ", remainingBalance - 300)

//q1

const ricePrice: number = 84
const sugarPrice: number = 48
const oilPrice: number = 165

let riceQuantity: number = 5
let sugarQuantity: number = 3
let oilQuantity: number = 2


let riceTotal = ricePrice * riceQuantity
let sugarTotal = sugarPrice * sugarQuantity
let oilTotal = oilPrice * oilQuantity

let subtotal = riceTotal + sugarTotal + oilTotal

const discount: number = 120
let afterDiscount = subtotal - discount

const deliveryCharge: number = 45
let finalAmount = afterDiscount + deliveryCharge

console.log("============= SUPERMARKET BILL ============")
console.log(`Rice (${riceQuantity})         : Rs ${riceTotal}`)
console.log(`Sugar (${sugarQuantity})       : Rs ${sugarTotal}`)
console.log(`Oil (${oilQuantity})           : Rs ${oilTotal}`)
console.log(`---------------------------------------------`)
console.log(`subtotal                   : Rs ${subtotal}`)
console.log(`discount                   : Rs ${discount}`)
console.log(`delieveryCharge            : Rs ${deliveryCharge}`)
console.log(`---------------------------------------------`)
console.log(`finalAmount                : Rs ${finalAmount}`)
console.log("=============================================")





