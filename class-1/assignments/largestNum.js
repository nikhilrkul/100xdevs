/**
 * 1. Write a program that prints the largest number from an array
 *
 */

const numbers = [2, 3, 5, 8, 10, 20, 15];
let largest = numbers[0];

for (let num = 0; num < numbers.length; num++) {
  if (numbers[num] > largest) {
    largest = numbers[num];
  }
}

console.log(largest);
