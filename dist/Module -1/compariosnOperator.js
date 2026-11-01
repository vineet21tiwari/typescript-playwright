"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// let num: number = 0
// if (num > 0){
//     console.log("num is positive")
// }
// else if (num < 0){
//     console.log("num is negative")
// }
// else{
//     console.log("num is zero")
// }
// take an integer from the User
// -> check whether the number is even or odd 
// -> if even check wheterh it is grater than 50 
// -> if odd, check whether it is less then 25
// -> print  a different message depending onthe result
const prompt = (0, prompt_sync_1.default)();
let num = Number(prompt("Enter the number: "));
if (num % 2 === 0) {
    console.log("Number is even");
    if (num > 50) {
        console.log("Even number is greater than 50");
    }
    else {
        console.log("Even number is 50 or less");
    }
}
else {
    console.log("Numbern is odd");
    if (num < 25) {
        console.log("Odd number is less than 25");
    }
    else {
        console.log("Odd number is 25 or greater");
    }
}
//# sourceMappingURL=compariosnOperator.js.map