/**
 * 1. Write a program to greet a person given their first and last name
 * 2. Write a program to greet a person based on gender
 */

let fname = "Nikhil";
let lname = "Kulkarni";
let age = 18;
let gender = "male";

// console.log(
//   "This person name is " + fname + " " + lname + " and age is " + age
// );

function functionGreet() {
  gender = "female";
  if (gender == "male") {
    console.log(`Hello ${fname} ${lname}, How are you doing?` + gender);
  } else {
    console.log(`Hello ${fname} ${lname}, How are you doing?` + gender);
  }
}

functionGreet();
