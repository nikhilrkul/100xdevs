/**
 * 1. Write a program that counts from 0 to 1000 and prints
 *
 */

const ages = [20, 21, 22, 23, 24, 25];
const noOfPeople = ages.length;

for (let i = 0; i < noOfPeople; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}
