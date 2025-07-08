//1. Create an array called fruits with the following elements:
//2. Use the slice method to create a new array citrus that contains the second and third elements of fruits.
//3. Use the splice method to replace the last two elements of fruits with the string 'fig'.
//4. Use the join method to create a string fruitString from the fruits array, with elements separated by a dash -.

let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango'];
let citrus = fruits.slice(1, 3);
fruits.splice(-2, 2, 'fig');
let fruitString = fruits.join('-');


//**Challenge**:
//**-** Write a function called processFruits that takes an array of fruits as input, performs the above steps on it, and returns the resulting string.

function processFruits(fruits) {
    let citrus = fruits.slice(1, 3);
    fruits.splice(-2, 2, 'fig');
    return fruits.join('-');
}