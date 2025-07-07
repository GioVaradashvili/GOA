// Function that takes an array as an argument and returns the number of elements in that array
function getArrayLength(arr) {
    return arr.length;
}

// Function that takes two arrays as arguments and returns a new array that is the result of concatenating the two arrays
function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

// Function that takes an array and a value as arguments and adds the value to the end of the array using the push() method. The function should return the new length of the array
function pushValueToArray(arr, value) {
    return arr.push(value);
}

// Function that takes an array as an argument and removes the last element from the array using the pop() method. The function should return the removed element
function popValueFromArray(arr) {
    return arr.pop();
}

// Function that takes two arrays as arguments, concatenates them, and then pushes a new value to the end of the concatenated array. The function should return the new array
function concatenateAndPush(arr1, arr2, value) {
    let newArray = arr1.concat(arr2);
    newArray.push(value);
    return newArray;
}

// Function that takes an array as an argument and returns the sum of all elements in the array using a for loop
function sumArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Function that takes an array as an argument and creates a new array containing only the even-indexed elements of the original array using a for loop
function getEvenIndexedElements(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i += 2) {
        newArray.push(arr[i]);
    }
    return newArray;
}

// Function that takes an array of strings and returns a new array with each string's length using a for loop and the push() method
function getStringLengths(arr) {
    let lengths = [];
    for (let i = 0; i < arr.length; i++) {
        lengths.push(arr[i].length);
    }
    return lengths;
}