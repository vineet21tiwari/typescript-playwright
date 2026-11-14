/* Q01 Meet the Student
Create variables for a new student joining the course.
a. Store student name, age, city and course title in separate variables.
b. Use const for values that will not change and let for age if it can be updated.
c. Print all four values using a single console.log().
d. Print a 4-line student profile using \n in one console.log().
e. Change city and explain why reassignment is allowed or not. */

/* const studentName: string = "John";
let studentAge: number = 22;
let studentCity: string = "New York";
const courseTitle: string = "TypeScript";

console.log(studentName, studentAge, studentCity, courseTitle);

console.log(`Student Name is: ${studentName}\nStudent Age: ${studentAge}\nStudent City: ${studentCity}\nTakingCourse: ${courseTitle}`);

studentCity = "Los Angeles"; 
console.log(`Student Updated City: ${studentCity}`); */

/* 
*******************
Q02 Shopping Checkout
A customer is buying 3 notebooks priced at Rs. 45 each.
a. Declare the notebook price and quantity with appropriate keywords.
b. Calculate the total cost and print it with a readable label.
c. Update quantity to 5 and print the new bill.
d. Add a fixed Rs. 20 delivery charge; calculate the final amount.
e. Explain which variables should be const and which should be let 
***************
*/
/* 
const notebookPrice: number = 45;
let notebookQuantity: number = 3;

let totalCost: number = notebookPrice * notebookQuantity;
console.log(`Total Cost: Rs. ${totalCost}`);
const deliveryCharge: number = 20;
let finalAmount: number = totalCost + deliveryCharge;
console.log(`Final Amount (including delivery): Rs. ${finalAmount}`);

notebookQuantity = 5;
totalCost = notebookPrice * notebookQuantity;
console.log(`Updated Total Cost: Rs. ${totalCost}`);
const updatedFinalAmount: number = totalCost + deliveryCharge;
console.log(`Updated Final Amount (including delivery): Rs. ${updatedFinalAmount}`); */

/* Q03 Monthly Salary Revision
An employee receives a salary increase and a fixed bonus.
a. Create a variable with an initial salary of Rs. 30000.
b. Reassign salary after a Rs. 4000 increment.
c. Create a constant bonus of Rs. 2000.
d. Calculate and print salary plus bonus.
e. Print both old and new salary on separate lines with one console.log(). */
/* 
let initialSalary: number = 30000;
let newSalary: number = initialSalary + 4000;
const bonus: number = 2000;
let totalWithBonus: number = newSalary + bonus;

console.log(`Initial Salary: Rs. ${initialSalary}`);
console.log(`New Salary: Rs. ${newSalary}`);
console.log(`Total (with bonus): Rs. ${totalWithBonus}`); */

/* Q04 Exam Scorecard
A student has marks in Mathematics, Science and English.
a. Store marks 78, 89 and 84 as three variables.
b. Calculate the total marks out of 300.
c. Calculate percentage and show it using a template literal.
d. Change the Science marks to 94 and calculate the new percentage.
e. Predict the outputs before running. */
/* 
const mathMarks: number = 78;
let scienceMarks: number = 89;
const englishMarks: number = 84;
let totalMarks: number = mathMarks + scienceMarks + englishMarks;
const percentage: number = (totalMarks / 300) * 100;
console.log(`Percentage: ${percentage.toFixed(2)}%`);

scienceMarks = 94;
totalMarks = mathMarks + scienceMarks + englishMarks;
const newPercentage: number = (totalMarks / 300) * 100;
console.log(newPercentage)  
console.log(`New Percentage: ${newPercentage.toFixed(2)}%`); */

/* 
05 Swap Challenge
Two variables hold different values.
a. Declare a = 10 and b = 20 using let.
b. Print both values before swapping.
c. Swap them using a third variable.
d. Print both values after swapping in a single console.log().
e. Challenge: repeat without using a third variable.
 */
/* 
let a: number = 10;
let b: number = 20;
console.log(`Before Swapping: a = ${a}, b = ${b}`);
let c: number = a;
a = b;
b = c;
console.log(`After Swapping: a = ${a}, b = ${b}`);
let x: number = 10;
let y: number = 20;
console.log(`Before Swapping: x = ${x}, y = ${y}`);
[x, y] = [y, x];
console.log(`After Swapping: x = ${x}, y = ${y}`);
 */

/* Q06 Login Test Data
Prepare fictional data for an automated login test.
a. Store an application URL and username in constants.
b. Store login attempt count in a let variable starting at 0.
c. Increase the attempt count twice.
d. Print the username, URL and attempts using a multiline template literal.
e. Explain why passwords should not be logged in real automation tests. */
/* const appUrl: string = "https://playwrighttest.com/login";
const username: string = "testUser1";
let loginAttempts: number = 0;
loginAttempts++;
loginAttempts++;
console.log(`Username: ${username}`);
console.log(`URL: ${appUrl}`);
console.log(`Login Attempts: ${loginAttempts}`); */

/* 
07 Ticket Booking
A booking counter sells tickets at a fixed price.
a. Set ticket price to Rs. 250 and initial ticket quantity to 2.
b. Calculate and print the initial payable amount.
c. Update ticket quantity to 4, then recalculate.
d. Add a one-time convenience fee of Rs. 30.
e. Print a neatly formatted invoice using only one console.log(). */
/* 
let ticketPrice: number = 250;
let ticketQuantity: number = 2;
let initialAmount: number = ticketPrice * ticketQuantity;
console.log(`Initial Payable Amount: Rs. ${initialAmount}`);
ticketQuantity = 4;
let updatedAmount: number = ticketPrice * ticketQuantity;
console.log(`Updated Payable Amount: Rs. ${updatedAmount}`);
let convenienceFee: number = 30;
console.log(`Convenience Fee: Rs. ${convenienceFee}`);
let totalAmount: number = updatedAmount + convenienceFee;
console.log(`Total Payable Amount: Rs. ${totalAmount}`); */
/* 
/* 08 Predict the Output
Study code without running it first.
a. Predict: let x = 5; x = x + 10; console.log(x);
b. Predict: const rate = 8; console.log(rate * 3);
c. Predict: var city = "A"; var city = "B"; console.log(city);
d. Explain whether const count = 1; count = 2; compiles successfully.
e. Run each valid snippet and compare with your prediction. */

/* let x: number = 5;
x = x + 10;
console.log(x);
 //  15
let rate: number = 8;
console.log(rate * 3); 
//  24
let city: string = "A";
city = "B";
console.log(city); 
//  "B"
const count: number = 1;
// count = 2; count' is declared as a constant and cannot be reassigned.
 */
/* 
 09 Variable Scope
Investigate access to variables inside and outside a block.
a. Declare let city = "Delhi" outside a block.
b. Inside a block, declare a different let city = "Mumbai".
c. Print city inside and outside the block.
d. Declare a const only inside a block and try to access it outside.
e. Explain the resulting TypeScript error in your own words. */
/* 
let city: string = "Delhi";
{
  let city: string = "Mumbai";
  console.log(`Inside Block: ${city}`); 
  // Mumbai
}
console.log(`Outside Block: ${city}`); 
// Delhi
let blockConst: string;
{
  const blockConst: string = "Block Constant";
  console.log(`Inside Block: ${blockConst}`); 
  // Block Constant
}
console.log(`Outside Block: ${blockConst}`); 
// Error: 'blockConst' is declared but its value is never read. */

/* 10 Debug the Program
Fix broken TypeScript statements.
a. Correct: let 1name = "Amit";
b. Correct: const age = 20; age = 21;
c. Correct the duplicate declaration: let score = 10; let score = 20;
d. Correct: let first name = "Sam";
e. Write one sentence explaining the reason for each correction. */

/* let name1: string = "Amit"; // Variable names cannot start with a number.
const age: number = 20;
// age = 21; // Error: Cannot assign to 'age' because it is a constant.
let score: number = 10; // Removed duplicate declaration of 'score'.
let firstName: string = "Sam"; // Variable names cannot contain spaces. */
/* 

11 Console Formatting
Practice clean output formatting with one console.log().
a. Print name and age separated by a space using commas.
b. Print name and age using string concatenation.
c. Print the same information using a template literal.
d. Use \n to display name, age and city on three different lines.
e. Explain the difference between a comma and a newline escape sequence. */
/* 
let name: string = "Amit";
let age: number = 20;
let city: string = "Delhi";

// a. Print name and age separated by a space using commas.
console.log(name, age);

// b. Print name and age using string concatenation.
console.log(name + " " + age);

// c. Print the same information using a template literal.
console.log(`${name} ${age}`);

// d. Use \n to display name, age and city on three different lines.
console.log(`${name}\n${age}\n${city}`);

// e. Explain the difference between a comma and a newline escape sequence.
// A comma in console.log() separates values with a space, while \n inserts a newline character.
*/
/* 12 Mini Project: Course Receipt
Build a small receipt generator using only variables and console output.
a. Create constants for course title, enrollment ID and course fee (Rs. 5999).
b. Create a let variable for discount starting at Rs. 500.
c. Calculate final payable fee.
d. Update discount to Rs. 750 and recalculate.
e. Print a multiline receipt with a heading, all amounts and final payable fee. */

const courseTitle: string = "TypeScript Course";
const enrollmentID: string = "123456";
const courseFee: number = 5999;
let discount: number = 500;
let finalPayableFee: number = courseFee - discount;

discount = 750;
finalPayableFee = courseFee - discount;

console.log(`Course Receipt\nCourse Title: ${courseTitle}\nEnrollment ID: ${enrollmentID}\nCourse Fee: Rs. ${courseFee}\nDiscount: Rs. ${discount}\nFinal Payable Fee: Rs. ${finalPayableFee}`);

