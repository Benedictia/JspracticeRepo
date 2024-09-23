// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
  // check if all numbers are divisible by 5 
  const numbers = [10,25,15,5]
  const allDivisibleBy5 = numbers.every(num=>num% 5 ===0);
  // Check if the first number is larger than the last
const isFirstLargerThanLast = numbers[0] > numbers[numbers.length - 1];

// Arithmetic chain
const firstNumber = numbers[0];
const secondNumber = numbers[1];
const thirdNumber = numbers[2];
const fourthNumber = numbers[3];

const result = ((secondNumber - firstNumber) * thirdNumber) % fourthNumber;

// Rename the variable to reflect its purpose without using the NOT operator
const isResultOver25 = result > 25;

// Output results
console.log(`All numbers divisible by 5: ${allDivisibleBy5}`);
console.log(`First number is larger than last: ${isFirstLargerThanLast}`);
console.log(`Final arithmetic result: ${result}`);
console.log(`Result is over 25: ${isResultOver25}`);


// Part 2: Practical Math
// Constants
const totalDistance = 1500; // Total distance of the trip in miles
const fuelBudget = 175; // Fuel budget in dollars
const fuelCostPerGallon = 3; // Cost of fuel per gallon in dollars

// Fuel efficiency data
const fuelEfficiency = {
    '55': 30, // miles per gallon at 55 mph
    '60': 28, // miles per gallon at 60 mph
    '75': 23  // miles per gallon at 75 mph
};

// Function to calculate trip details
const calculateTripDetails = (speed) => {
    const mpg = fuelEfficiency[speed];
    const gallonsNeeded = totalDistance / mpg;
    const totalFuelCost = gallonsNeeded * fuelCostPerGallon;
    const travelTime = totalDistance / speed; // in hours

    return {
        gallonsNeeded,
        totalFuelCost,
        travelTime
    };
};

// Compare results for different speeds
for (const speed of Object.keys(fuelEfficiency)) {
    const { gallonsNeeded, totalFuelCost, travelTime } = calculateTripDetails(speed);
    const budgetSufficient = totalFuelCost <= fuelBudget;

    console.log(`Traveling at ${speed} mph:`);
    console.log(`- Gallons of fuel needed: ${gallonsNeeded.toFixed(2)}`);
    console.log(`- Total fuel cost: $${totalFuelCost.toFixed(2)}`);
    console.log(`- Travel time: ${travelTime.toFixed(2)} hours`);
    console.log(`- Is the budget sufficient? ${budgetSufficient ? 'Yes' : 'No'}`);
    console.log('----------------------------------------');
}
