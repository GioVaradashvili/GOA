// 1. 1-დან 10-მდე რიცხვების ჯამი
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`საბოლოო რიცხვების ჯამი არის ${sum}`);

// 2. რიცხვების კვადრატი
for (let i = 1; i <= 10; i++) {
    console.log(`${i} - ის კვადრატი არის ${i * i}`);
}

// 3. სტრინგის თითოეული ასოს დაბეჭდვა
let text = "გამარჯობა";
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

// 4. FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}