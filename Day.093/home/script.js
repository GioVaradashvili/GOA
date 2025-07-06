// პროგრამა 1: ტრანსპორტის რეკომენდაციები
function transportRecommendation() {
    const name = prompt("შეიყვანეთ თქვენი სახელი:");
    const age = parseInt(prompt("შეიყვანეთ თქვენი ასაკი:"));
    const distanceToWork = parseFloat(prompt("შეიყვანეთ სამუშაო ადგილამდე მანძილი (კმ-ში):"));
    const workDays = parseInt(prompt("შეიყვანეთ სამუშაო დღეების რაოდენობა კვირაში (0-დან 7-მდე):"));

    if (age < 16) {
        console.log("გთხოვთ, მოითხოვოთ გამგზავრების ნებართვა უფროსისგან");
    } else if (age >= 16 && age < 65) {
        if (distanceToWork >= 0 && distanceToWork < 5) {
            console.log("რეკომენდირებული ტრანსპორტი არის ველოსიპედი");
        } else if (distanceToWork >= 5 && distanceToWork < 20) {
            console.log("რეკომენდირებული ტრანსპორტი არის მანქანა");
        } else if (distanceToWork >= 20) {
            console.log("რეკომენდირებული ტრანსპორტი არის მატარებელი");
        }
    }

    if (workDays >= 5) {
        console.log("გთხოვთ, მოითხოვოთ შეღავათების მიღება ტრანსპორტზე");
    }
}

// პროგრამა 2: პირადი მონაცემების შემოწმება
function personalDataCheck() {
    const name = prompt("შეიყვანეთ თქვენი სახელი:");
    const age = parseInt(prompt("შეიყვანეთ თქვენი ასაკი:"));
    const dailyRunDistance = parseFloat(prompt("შეიყვანეთ ყოველდღიური სირბილის რაოდენობა (კმ-ში):"));
    const exerciseDays = parseInt(prompt("შეიყვანეთ სავარჯიშო დღეების რაოდენობა კვირაში (0-დან 7-მდე):"));

    if (age < 16 || age > 60) {
        console.log("გთხოვთ, გაიაროთ ექიმის კონსულტაცია");
    }

    const weeklyRunDistance = dailyRunDistance * exerciseDays;
    if (weeklyRunDistance < 20) {
        console.log("შესაძლებელია მეტი ვარჯიში");
    }
}

// ფუნქციების გამოძახება
transportRecommendation();
personalDataCheck();