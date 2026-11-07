// marks>= 90 ----> grade A 
// marks >= 75  ----> grade B 
// marks >= 50 ---> grade C 
// else grade  ---> fail
// let marks = 85;
// marks >= 90 ? console.log("A") :
// marks >= 75 ? console.log("B") :
// marks >=50 ? console.log("C"):
// console.log("Fail")

// let grade = marks >= 90 ? "A" :
// marks >= 75 ? "B" :
// marks >=50 ? "C":
// "Fail"

// console.log("final grade is ", grade)
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // take three numbers and find largest among these using ternary operator
// let a = 45;
// let b = 78;
// let c = 62;

// let largestBetweenAandB = a > b ? a : b
// let largest = largestBetweenAandB > c ? largestBetweenAandB : c;


// let large = a > b ? (a > c ? a : c) : (b > c ? b : c);

// console.log("Largest number : ", largest)
// console.log("Largest using nested ternary : ",large)
// ##############################################################################################################################################################################
// A student receives a scholarship based on marks and family income.

// Rules:
// - Marks below 60: "Not Eligible"
// - Marks 60–79 and income below ₹3,00,000: "25% Scholarship"
// - Marks 80–89 and income below ₹3,00,000: "50% Scholarship"
// -  or above and income below ₹3,00,000: "100% Scholarship"
// - All other cases: "Not Eligible"

let marks = 85;
let familyIncome = 250000;

let scholarship = familyIncome < 300000 ? (marks >= 90 ? "100% scholarship" : 
                                        marks >=80 ? "50% scholarship" :
                                        marks >=60 ? "25% scholarship":
                                        "Not eligible")
                                        :
                                        "Not eligigble "