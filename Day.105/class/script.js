// 1. Create a nested array called nestedArray with the following elements:
const nestedArray = [1, [2, 3], [4, [5, 6]], 7, [8, [9, [10]]]];

// 2. Use the flat method to create a new array flatArray that flattens nestedArray by one level.
const flatArray = nestedArray.flat(1);
console.log(flatArray); 

// 3. Use the flat method again to fully flatten nestedArray into a single-level array and store it in fullyFlatArray.
const fullyFlatArray = nestedArray.flat(Infinity);
console.log(fullyFlatArray); 

// 4. Write a function called checkElement that takes an array and a value as input and returns true if the value is found in the array using the includes method, and false otherwise.
function checkElement(array, value) {
    return array.includes(value);
}
console.log(checkElement(fullyFlatArray, 5));
console.log(checkElement(fullyFlatArray, 11));

// 5. Write a function called findIndexOfElement that takes an array and a value as input and returns the index of the value in the array using the indexOf method. If the value is not found, it should return -1.
function findIndexOfElement(array, value) {
    return array.indexOf(value);
}
console.log(findIndexOfElement(fullyFlatArray, 5));
console.log(findIndexOfElement(fullyFlatArray, 11));

// 6. Write a function called findLastIndexOfElement that takes an array and a value as input and returns the last index of the value in the array using the lastIndexOf method. If the value is not found, it should return -1.
function findLastIndexOfElement(array, value) {
    return array.lastIndexOf(value);
}
console.log(findLastIndexOfElement(fullyFlatArray, 5));
console.log(findLastIndexOfElement(fullyFlatArray, 11));