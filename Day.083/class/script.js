// მომხმარებლის ასაკის შეყვანა
let age = parseInt(prompt("შეიყვანეთ თქვენი ასაკი:"));

// ასაკის შესაბამისად სტატუსის განსაზღვრა
if (age > 80) {
    console.log("დაბერდი ძმაო");
} else if (age > 18) {
    console.log("შენ ხარ სრულწოვანი");
} else if (age > 12) {
    console.log("შენ ხარ თინეიჯერი/მოზარდი");
} else if (age > 5) {
    console.log("შენ ხარ ბავშვი");
} else {
    console.log("ძალიან პატარა ხარ, ძმაო");
}