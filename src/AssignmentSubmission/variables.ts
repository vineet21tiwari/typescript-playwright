// var city = "Hyderabad";
// let salary = 25000;

// var city = "USA"
// salary = 20000;
// const country = "India"

// console.log(city)
// console.log(salary)
// console.log(country)

let a = 10;
let b = 20;
console.log("the value of a is " ,a , "\nand the value of b is ", b)

let c = a  // c= 10
a = b     // a = 20
b = c


// swap two values using a third variable


console.log("the value of a after swap is " ,a , "\nand the value of b after swap is ", b)
// console.log("the value of b is " ,b)

//Q6 Login
const appURL: string = "https://example.com/login"
const username : string = "testUser"

let loginAttempts: number = 0

loginAttempts = loginAttempts + 2
console.log(`
    Login Test Details
    ------------------------
    Application URL : ${appURL}
    Username : ${username}
    Login Attempts : ${loginAttempts}
    `)

