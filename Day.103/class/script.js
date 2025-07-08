//1. Create two arrays, array1 and array2, with the following elements:
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
//2. Concatenate array1 and array2 into a new array called concatArray.
let concatArray = array1.concat(array2);
//3. Use the copyWithin method to copy the first two elements of concatArray to the end of the array.
concatArray.copyWithin(concatArray.length - 2, 0, 2);
//4. Use the fill method to replace the last three elements of concatArray with the number 0.
concatArray.fill(0, concatArray.length - 3);
//5. Remove the last element from concatArray using the pop method and store it in a variable lastElement.
let lastElement = concatArray.pop();
//6. Remove the first element from concatArray using the shift method and store it in a variable firstElement.
let firstElement = concatArray.shift();
//7. Add the elements 10 and 20 to the beginning of concatArray using the unshift method.
concatArray.unshift(10, 20);

//Challenge:
function modifyArray(array) {
    // Create two arrays, array1 and array2, with the following elements:
    let array1 = [1, 2, 3, 4, 5];
    let array2 = [6, 7, 8, 9, 10];
    
    // Concatenate array1 and array2 into a new array called concatArray.
    let concatArray = array1.concat(array2);
    // Use the copyWithin method to copy the first two elements of concatArray to the end of the array.
    concatArray.copyWithin(concatArray.length - 2, 0, 2);
    // Use the fill method to replace the last three elements of concatArray with the number 0.
    concatArray.fill(0, concatArray.length - 3);
    // Remove the last element from concatArray using the pop method and store it in a variable lastElement.
    let lastElement = concatArray.pop();
    // Remove the first element from concatArray using the shift method and store it in a variable firstElement.
    let firstElement = concatArray.shift();
    // Add the elements 10 and 20 to the beginning of concatArray using the unshift method.
    concatArray.unshift(10, 20);
    
    return concatArray;
}