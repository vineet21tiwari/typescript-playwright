import promptSync from "prompt-sync";
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

const prompt = promptSync()
let num: number  = Number(prompt("Enter the number: "))
if (num % 2 === 0){
    console.log("Number is even")
    if (num > 50){
        console.log("Even number is greater than 50")
    }
    else{
        console.log("Even number is 50 or less")
    }
}
else{
    console.log("Numbern is odd")
    if(num < 25){
        console.log("Odd number is less than 25")
    }
    else{
        console.log("Odd number is 25 or greater")
    }
}

// Write a TypeScript program that takes the student's marks in three subjects: Mathematics, Science, and English. Each subject is out of 100.

// Requirements:
// 1. Take all three marks from the user.
// 2. Calculate total marks out of 300.
// 3. Calculate the percentage.
// 4. Use if/else if/else to assign a grade based on the percentage:
// Percentage	Grade
// 90–100%	        A+
// 75–below 90%	    A
// 60–below 75%	    B
// 40–below 60%	    C
// Below 40%	    F


// ATM Withdrawal System

// A customer has an account balance of ₹25,000, a daily withdrawal limit of ₹20,000, and has already withdrawn ₹8,000 today.
// Write a TypeScript program to:
// Take the ATM PIN and withdrawal amount from the user.
// Allow withdrawal only if the PIN is 1234.
// Accept only positive withdrawal amounts in multiples of ₹500.
// Ensure the daily withdrawal limit is not exceeded.
// Maintain a minimum account balance of ₹2,000.
// If successful, update the balance and daily withdrawal total.
// Otherwise, display an appropriate error message.

// Test with: ₹5,000, ₹12,000, ₹13,000, ₹5,250, and ₹0.
