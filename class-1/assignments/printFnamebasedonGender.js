/**
 * 1. Write a program that prints the largest number from an array
 *
 */

const allUsers = [
  {
    firstname: "Nikhil",
    gender: "male",
  },
  
  {
    firstname: "Saumya",
    gender: "male",
  },
  {
    firstname: "Priya",
    gender: "female",
  },
];

for (let user = 0; user < allUsers.length; user++) {
  if (allUsers[user]["gender"] == "male") {
    console.log(allUsers[user]["firstname"]);
  }
}
