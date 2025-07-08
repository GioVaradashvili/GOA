// Step 1: Create two arrays, numsArray and strArray
const numsArray = [1, 2, 3, 4, 5];
const strArray = ['a', 'b', 'c', 'd', 'e'];

// Step 2: Concatenate numsArray and strArray into a new array called combinedArray
let combinedArray = numsArray.concat(strArray);

// Step 3: Use the copyWithin method to copy the first three elements of combinedArray to the positions starting from index 4
combinedArray.copyWithin(4, 0, 3);

// Step 4: Use the fill method to replace the elements from index 2 to index 4 with the string "filled"
combinedArray.fill('filled', 2, 4);

// Step 5: Remove the last element from combinedArray using the pop method
combinedArray.pop();

// Step 6: Remove the first element from combinedArray using the shift method
combinedArray.shift();

// Step 7: Add the elements 100 and 200 to the beginning of combinedArray using the unshift method
combinedArray.unshift(100, 200);

// Challenge: Write a function called modifyArray that takes an array as input and performs all the above steps on it
function modifyArray(arr) {
    let combinedArray = arr.concat(strArray);
    combinedArray.copyWithin(4, 0, 3);
    combinedArray.fill('filled', 2, 4);
    combinedArray.pop();
    combinedArray.shift();
    combinedArray.unshift(100, 200);
    return combinedArray;
}

// Example usage:
let exampleArray = [1, 2, 3, 4, 5];
console.log(modifyArray(exampleArray));
// Step 1: Create two arrays, people and places, with the following objects:
const people = [{ name: 'Alice' }, { name: 'Bob' }];
const places = [{ city: 'Paris' }, { city: 'London' }];

// Step 2: Concatenate people and places into a new array called mergedArray
let mergedArray = people.concat(places);

// Step 3: Use the copyWithin method to copy the first two elements of mergedArray to the positions starting from index 2
mergedArray.copyWithin(2, 0, 2);

// Step 4: Use the fill method to replace the last two elements of mergedArray with the object {city: 'New York'}
mergedArray.fill({ city: 'New York' }, 2, 4);

// Step 5: Remove the last element from mergedArray using the pop method
mergedArray.pop();

// Step 6: Remove the first element from mergedArray using the shift method
mergedArray.shift();

// Step 7: Add the objects {name: 'Charlie'} and {name: 'David'} to the beginning of mergedArray using the unshift method
mergedArray.unshift({ name: 'Charlie' }, { name: 'David' });

console.log(mergedArray);
// Step 1: Create an array called mixedArray with the following elements:
const mixedArray = [1, 'two', 3, 'four', 5];

// Step 2: Concatenate mixedArray with another array [true, false] into a new array called extendedArray
let extendedArray = mixedArray.concat([true, false]);

// Step 3: Use the copyWithin method to copy the elements 3 and 'four' to the start of extendedArray
extendedArray.copyWithin(0, 2, 4);

// Step 4: Use the fill method to replace the elements 5, true, and false with the number 0
extendedArray.fill(0, 4, 7);

// Step 5: Remove the last element from extendedArray using the pop method
extendedArray.pop();

// Step 6: Remove the first element from extendedArray using the shift method
extendedArray.shift();

// Step 7: Add the elements null and undefined to the beginning of extendedArray using the unshift method
extendedArray.unshift(null, undefined);

console.log(extendedArray);