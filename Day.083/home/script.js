let number = parseInt(prompt("შეიყვანეთ რიცხვი:"));
if (number % 2 === 0) {
    console.log("ეს რიცხვი ლუწია.");
} else {
    console.log("ეს რიცხვი კენტია.");
}

let temperature = parseFloat(prompt("შეიყვანეთ ტემპერატურა ცელსიუსში:"));
if (temperature < 10) {
    console.log("ტემპერატურა ცივია.");
} else if (temperature >= 10 && temperature <= 25) {
    console.log("ტემპერატურა ზომიერია.");
} else {
    console.log("ტემპერატურა ცხელია.");
}

let score = parseInt(prompt("შეიყვანეთ ქულა (0-100):"));
if (score >= 90 && score <= 100) {
    console.log("შეფასება: A");
} else if (score >= 80 && score <= 89) {
    console.log("შეფასება: B");
} else if (score >= 70 && score <= 79) {
    console.log("შეფასება: C");
} else if (score >= 60 && score <= 69) {
    console.log("შეფასება: D");
} else if (score >= 0 && score <= 59) {
    console.log("შეფასება: F");
} else {
    console.log("შეყვანილი ქულა არასწორია!");
}