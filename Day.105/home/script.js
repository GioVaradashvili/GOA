// Step 1: Create three arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let nestedArray = [1, [2, 3], [4, 5, [6, 7]], 8, 9];

// Step 2: Concatenate arr1 and arr2 into a new array called combinedArray
let combinedArray = arr1.concat(arr2);

// Step 3: Use the copyWithin method to copy the first three elements of combinedArray to the positions starting from index 5
combinedArray.copyWithin(5, 0, 3);

// Step 4: Use the fill method to replace elements from index 6 to the end with the number 0
combinedArray.fill(0, 6);

// Step 5: Remove the last element from combinedArray using the pop method
combinedArray.pop();

// Step 6: Remove the first element from combinedArray using the shift method
combinedArray.shift();

// Step 7: Add the elements 100 and 200 to the beginning of combinedArray using the unshift method
combinedArray.unshift(100, 200);

// Step 8: Use the splice method to remove the elements at indices 2 and 3, and replace them with the elements [x, y, z]
combinedArray.splice(2, 2, 'x', 'y', 'z');

// Step 9: Use the slice method to create a new array slicedArray that contains the last five elements of combinedArray
let slicedArray = combinedArray.slice(-5);

// Step 10: Use the join method to create a string from slicedArray, with elements separated by a comma
let joinedString = slicedArray.join(',');

// Step 11: Use the flat method to flatten nestedArray into a single-level array and store it in flatArray
let flatArray = nestedArray.flat(Infinity);

// Step 12: Check if the element 8 is included in flatArray using the includes method
let includesEight = flatArray.includes(8);

// Step 13: Find the index of the element 9 in flatArray using the indexOf method
let indexOfNine = flatArray.indexOf(9);

// Step 14: Find the last index of the element 7 in flatArray using the lastIndexOf method
let lastIndexOfSeven = flatArray.lastIndexOf(7);

console.log('combinedArray:', combinedArray);
console.log('slicedArray:', slicedArray);
console.log('joinedString:', joinedString);
console.log('flatArray:', flatArray);
console.log('includesEight:', includesEight);
console.log('indexOfNine:', indexOfNine);
console.log('lastIndexOfSeven:', lastIndexOfSeven);
// Step 15: Add the element 13 to the end of flatArray using the push method
flatArray.push(13);

console.log('flatArray after push:', flatArray);
// Task 3

// Step 1: Create an initial array
let numbers = [10, 20, 30, 40, 50];

// Step 2: Use .concat()
let secondArray = [60, 70, 80];
let concatenatedArray = numbers.concat(secondArray);

// Step 3: Use .copyWithin()
numbers.copyWithin(3, 1, 3);

// Step 4: Use .fill()
numbers.fill(100, 0, 3);

// Step 5: Use .pop()
let lastElement = numbers.pop();

// Step 6: Use .shift()
let firstElement = numbers.shift();

// Step 7: Use .unshift()
numbers.unshift(5, 15);

// Step 8: Use .join()
let numbersString = numbers.join('-');

// Step 9: Use .slice()
let slicedNumbers = numbers.slice(1, 3);

// Step 10: Use .splice()
numbers.splice(2, 2, 200, 300);

// Step 11: Use .flat()
let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArr.flat(Infinity);

// Step 12: Use .includes()
let containsFifty = numbers.includes(50);

// Step 13: Use .indexOf()
let indexOfThirty = numbers.indexOf(30);

// Step 14: Use .lastIndexOf()
let lastIndexOfTwenty = numbers.lastIndexOf(20);

// Step 15: Use .push()
numbers.push(90, 100);

console.log('numbers:', numbers);
console.log('concatenatedArray:', concatenatedArray);
console.log('lastElement:', lastElement);
console.log('firstElement:', firstElement);
console.log('numbersString:', numbersString);
console.log('slicedNumbers:', slicedNumbers);
console.log('flattenedArray:', flattenedArray);
console.log('containsFifty:', containsFifty);
console.log('indexOfThirty:', indexOfThirty);
console.log('lastIndexOfTwenty:', lastIndexOfTwenty);