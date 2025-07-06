// Level 94: Logical Operators
function isTriangle(a, b, c) {
    return a + b > c && b + c > a && c + a > b;
}

// Prompt: Email Access
function requestEmail() {
    const email = prompt("Please enter your email:");
    if (email) {
        console.log("access granted");
    }
}

// Comparison Operators
function compareNumbers(num1, num2) {
    if (num1 === num2) {
        console.log("The numbers are equal.");
    } else if (num1 > num2) {
        console.log("The first number is greater.");
    } else {
        console.log("The second number is greater.");
    }
}

// Conditional Statements (If / else)
function financialPlanning(age, gender, income) {
    if (age >= 18) {
        if (gender === 'female') {
            if (income > 5000) {
                console.log("თქვენი ფინანსური მგომარეობა უზრუნველყოფილია");
            } else if (income > 3000) {
                console.log("ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.");
            } else {
                console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
            }
        } else if (gender === 'male') {
            if (income > 6000) {
                console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
            } else if (income > 4000) {
                console.log("შემოსავალი სტაბილურია");
            } else {
                console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
            }
        }
    } else {
        console.log("მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია");
    }
}

// Switch
function financialPlanningSwitch(age, gender, income) {
    switch (true) {
        case age < 18:
            console.log("მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია");
            break;
        case gender === 'female':
            switch (true) {
                case income > 5000:
                    console.log("თქვენი ფინანსური მგომარეობა უზრუნველყოფილია");
                    break;
                case income > 3000:
                    console.log("ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.");
                    break;
                default:
                    console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
            }
            break;
        case gender === 'male':
            switch (true) {
                case income > 6000:
                    console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
                    break;
                case income > 4000:
                    console.log("შემოსავალი სტაბილურია");
                    break;
                default:
                    console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
            }
            break;
    }
}

// Ternary Operator
function evaluateUser(age, score) {
    console.log(
        age >= 18
            ? score > 50
                ? "თქვენ წარმატებული ხართ"
                : "გჭირდებათ მეტი სწავლა"
            : "შენც ბავშვი ხარ, მაგრამ შეგიძლია წარმატებას მიაღწიო"
    );
}

// For Loop
function sumOfPrimes() {
    let sum = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    console.log("Sum of primes from 1 to 100:", sum);
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

// While Loop
function sumOfPrimesWhile() {
    let sum = 0;
    let i = 2;
    while (i <= 100) {
        if (isPrime(i)) {
            sum += i;
        }
        i++;
    }
    console.log("Sum of primes from 1 to 100:", sum);
}

// Break and Continue
function printNumbers() {
    for (let i = 1; i <= 50; i++) {
        if (i === 25) continue;
        if (i % 2 === 0) console.log(i);
    }
}