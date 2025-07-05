// 2. პაროლის გამოცნობა
let password = 'Group 41 is best';

function guessPassword() {
    let attempts = 3;
    while (attempts > 0) {
        let userInput = prompt("გთხოვთ შეყვანოთ პაროლი:");
        if (userInput === password) {
            alert("თქვენი შეყვანილი პაროლი სწორია");
            return;  // პაროლი სწორია, ფუნქცია დასრულდება
        } else {
            attempts--;
            if (attempts > 0) {
                alert(`პაროლი არასწორია, დარჩენილი ცდების რაოდენობა: ${attempts}`);
            }
        }
    }
    alert("თქვენ ამოგეწურათ ცდების რაოდენობა");
}

// 3. N რიცხვის ფაქტორიალის გამოთვლა
function calculateFactorial(N) {
    let factorial = 1;
    for (let i = 1; i <= N; i++) {
        factorial *= i;
    }
    return factorial;
}

let N = 5;  // შეგიძლიათ შეცვალოთ ნებისმიერი რიცხვი
console.log(`${N}-ის ფაქტორიალია: ${calculateFactorial(N)}`);

// 4. უკუთვლა
function countdown() {
    for (let i = 100; i >= 0; i--) {
        console.log(`დარჩენილია ${i} წამი`);
    }
}

countdown();