// Q01 Meet the Student
// Create variables for a new student joining the course.
// a. Store student name, age, city and course title in separate variables.
// b. Use const for values that will not change and let for age if it can be updated.
// c. Print all four values using a single console.log().
// d. Print a 4-line student profile using \n in one console.log().
// e. Change city and explain why reassignment is allowed or not.


/* let studentName = "Rasel Anan";
let studentAge = 20;
let studentCity = "New York";
const courseTitle = "TypeScript";

console.log(studentName, studentAge, studentCity, courseTitle);
console.log("Student Profile:");
console.log(`Name: ${studentName}\nAge: ${studentAge}\nCity: ${studentCity}\nCourse: ${courseTitle}`);
console.log("Student Profile: Repeat");
console.log("Student Name: ", studentName, "\nStudent Age: ", studentAge, "\nStudent City: ", studentCity, "\nCourse Title: ", courseTitle);
studentCity = "Los Angeles";
console.log(`Updated City: ${studentCity}`); */
// Reassignment is allowed for studentCity because it was declared with let.



// Q02 Shopping Checkout
// A customer is buying 3 notebooks priced at Rs. 45 each.
// a. Declare the notebook price and quantity with appropriate keywords.
// b. Calculate the total cost and print it with a readable label.
// c. Update quantity to 5 and print the new bill.
// d. Add a fixed Rs. 20 delivery charge; calculate the final amount.
// e. Explain which variables should be const and which should be let.

/* const notebookPrice = 45;
let quantity = 3;
let totalCost = notebookPrice * quantity;
console.log(`Total cost: Rs. ${totalCost}`);

quantity = 5;
totalCost = notebookPrice * quantity;
console.log(`Updated total cost: Rs. ${totalCost}`);

const deliveryCharge = 20;
const final_Amount = totalCost + deliveryCharge;
console.log(`Final amount with delivery charge: Rs. ${final_Amount}`); */

// notebookPrice and deliveryCharge are const because they do not change.
// quantity, totalCost, and final_Amount are let because they can be updated.



// Q03 Monthly Salary Revision
// An employee receives a salary increase and a fixed bonus.
// a. Create a variable with an initial salary of Rs. 30000.
// b. Reassign salary after a Rs. 4000 increment.
// c. Create a constant bonus of Rs. 2000.
// d. Calculate and print salary plus bonus.
// e. Print both old and new salary on separate lines with one console.log().

// let initialSalary = 30000;
// const oldSalary = initialSalary;
// let newSalary = oldSalary + 4000;
// const bonus = 2000;
// const totalSalary = newSalary + bonus;
// console.log(`Salary plus bonus: Rs. ${totalSalary}`);
// console.log(`Old Salary: Rs. ${oldSalary}\nNew Salary: Rs. ${newSalary}`);





// Q04 Exam Scorecard
// A student has marks in Mathematics, Science and English.
// a. Store marks 78, 89 and 84 as three variables.
// b. Calculate the total marks out of 300.
// c. Calculate percentage and show it using a template literal.
// d. Change the Science marks to 94 and calculate the new percentage.
// e. Predict the outputs before running.


// let mathematics = 78;
// let science = 89;
// let english = 84;
// let totalMarks = mathematics + science + english;
// let percentage = Math.round((totalMarks / 300) * 100);
// console.log(`Total marks: ${totalMarks}\nPercentage: ${percentage}%`);

// science = 94;
// totalMarks = mathematics + science + english;
// percentage = Math.round((totalMarks / 300) * 100);
// console.log(`Updated total marks: ${totalMarks}\nUpdated percentage: ${percentage}%`);




// Q05 Swap Challenge
// Two variables hold different values.
// a. Declare a = 10 and b = 20 using let.
// b. Print both values before swapping.
// c. Swap them using a third variable.
// d. Print both values after swapping in a single console.log().
// e. Challenge: repeat without using a third variable.

// let a = 10;
// let b = 20;
// console.log(`Before swapping: a = ${a}, b = ${b}`);
// let temp = a;
// a = b;
// b = temp;
// console.log(`After swapping: a = ${a}, b = ${b}`);

// [a, b] = [b, a];// Without using a third variable
// console.log(`After swapping without temp: a = ${a}, b = ${b}`);




// Q06 Login Test Data
// Prepare fictional data for an automated login test.
// a. Store an application URL and username in constants.
// b. Store login attempt count in a let variable starting at 0.
// c. Increase the attempt count twice.
// d. Print the username, URL and attempts using a multiline template literal.
// e. Explain why passwords should not be logged in real automation tests.

// const appUrl = "https://example.com";
// const username = "testuser";
// let attempts = 0;
// attempts++;
// attempts++;
// console.log(`Username: ${username}\nURL: ${appUrl}\nAttempts: ${attempts}`);// Passwords should not be logged in real automation tests for security reasons.






// Q07 Ticket Booking
// A booking counter sells tickets at a fixed price.
// a. Set ticket price to Rs. 250 and initial ticket quantity to 2.
// b. Calculate and print the initial payable amount.
// c. Update ticket quantity to 4, then recalculate.
// d. Add a one-time convenience fee of Rs. 30.
// e. Print a neatly formatted invoice using only one console.log().


// const ticketPrice = 250;
// let ticketQuantity = 2;
// let payableAmount = ticketPrice * ticketQuantity;
// console.log(`Initial payable amount:  ${payableAmount}`);

// ticketQuantity = 4;
// payableAmount = ticketPrice * ticketQuantity;
// console.log(`Updated payable amount:  ${payableAmount}`);

// const convenienceFee = 30;
// const finalAmount = payableAmount + convenienceFee;
// console.log(`Final amount with convenience fee:  ${finalAmount}`);

// console.log(`\n**** Invoice ****\nTicket Price: $ ${ticketPrice}\nTicket Quantity: ${ticketQuantity}\nPayable Amount: $ ${payableAmount}\nConvenience Fee: $ ${convenienceFee}\nFinal Amount: $ ${finalAmount}`);





// Q08 Predict the Output
// Study code without running it first.
// a. Predict: let x = 5; x = x + 10; console.log(x);
// b. Predict: const rate = 8; console.log(rate * 3);
// c. Predict: var city = "A"; var city = "B"; console.log(city);
// d. Explain whether const count = 1; count = 2; compiles successfully.
// e. Run each valid snippet and compare with your prediction.

// Predicted outputs:
// a. 15
// b. 24
// c. "B"
// d. const count = 1; count = 2; will throw an error because const cannot be reassigned.


// console.log("*****A****");
// let x = 5; 
// x = x + 10; 
// console.log(x);
// console.log("*****B****");
// const rate = 8; 
// console.log(rate * 3);
// console.log("*****C****");
// var city = "A"; 
// var city = "B"; 
// console.log(city);
// console.log("*****D****");
// const count = 1; // count = 2; // This will throw an error because const cannot be reassigned.
// console.log(count);







// Q09 Variable Scope
// Investigate access to variables inside and outside a block.
// a. Declare let city = "Delhi" outside a block.
// b. Inside a block, declare a different let city = "Mumbai".
// c. Print city inside and outside the block.
// d. Declare a const only inside a block and try to access it outside.
// e. Explain the resulting TypeScript error in your own words.



// let city = "Delhi";
// {
//     let city = "Mumbai";
//     console.log(`Inside block: ${city}`);
// }
// console.log(`Outside block: ${city}`);

// {
//     const blockOnlyConst = "I am only visible inside this block";
//     console.log(`Inside block: ${blockOnlyConst}`);
// }//console.log(`Outside block: ${blockOnlyConst}`); // This will throw an error because blockOnlyConst is not accessible outside the block.






// Q10 Debug the Program
// Fix broken TypeScript statements.
// a. Correct: let 1name = "Amit";
// b. Correct: const age = 20; age = 21;
// c. Correct the duplicate declaration: let score = 10; let score = 20;
// d. Correct: let first name = "Sam";
// e. Write one sentence explaining the reason for each correction.

// a. let 1name = "Amit"; // Variable names cannot start with a number.
// b. const age = 20; age = 21; // Cannot reassign a const variable.
// c. let score = 10; let score = 20; // Cannot redeclare a variable with the same name in the same scope.
// d. let first name = "Sam"; // Variable names cannot contain spaces.




// Q11 Console Formatting
// Practice clean output formatting with one console.log().
// Practice clean output formatting with one console.log().
// a. Print name and age separated by a space using commas.
// b. Print name and age using string concatenation.
// c. Print the same information using a template literal.
// d. Use \n to display name, age and city on three different lines.
// e. Explain the difference between a comma and a newline escape sequence.
// Example code for Q11:



// const personName = "Amit";
// const age = 25;
// const city = "Delhi";

// // a. Print name and age separated by a space using commas.
// console.log(personName, age);

// // b. Print name and age using string concatenation.
// console.log(personName + " " + age);

// // c. Print the same information using a template literal.
// console.log(`${personName} ${age}`);

// // d. Use \n to display name, age and city on three different lines.
// console.log(`${personName}\n${age}\n${city}`);

// e. Explain the difference between a comma and a newline escape sequence.
// A comma in console.log() adds a space between the values, while \n adds a newline character to move to the next line.





// Q12 Mini Project: Course Receipt
// Build a small receipt generator using only variables and console output.
// a. Create constants for course title, enrollment ID and course fee (Rs. 5999).
// b. Create a let variable for discount starting at Rs. 500.
// c. Calculate final payable fee.
// d. Update discount to Rs. 750 and recalculate.
// e. Print a multiline receipt with a heading, all amounts and final payable fee.

// Example code for Q12:
const course_Title = "Advanced TypeScript";
const enrollmentID = "TS123456";
const courseFee = 5999;
let discount = 500;
let finalPayableFee = courseFee - discount;

// d. Update discount to Rs. 750 and recalculate.
discount = 750;
finalPayableFee = courseFee - discount;

// e. Print a multiline receipt with a heading, all amounts and final payable fee.
console.log(`Course Receipt\n-------------------\nCourse Title: ${course_Title}\nEnrollment ID: ${enrollmentID}\nCourse Fee: Rs. ${courseFee}\nDiscount: Rs. ${discount}\nFinal Payable Fee: Rs. ${finalPayableFee}`);


