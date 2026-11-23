// TODO: Create an array called numbers with values 1 through 5
let numbers = [1, 2, 3, 4, 5]

// TODO: Write a for loop that prints each number in the array
for (let i = 0; i < numbers.length; i++) {
  console.log("Count up:", numbers[i]);
}

// TODO: Write a while loop that counts down from 5 to 1
let i = 4
while (i > -1 ) {
  console.log("Count down:", numbers[i]);
  i--
}

// TODO: Create a loop that prints only even numbers from the numbers array
for (const n of numbers) {
  if (n % 2 == 0){
    console.log('Even:', n);
  }
}

// TODO: Create a loop that calculates the sum of all numbers in the array
let sumn = 0
for (const n of numbers) {
  sumn += n
  console.log("Sum:", sumn);
}

