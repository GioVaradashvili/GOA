// ვქმნით ცხოველების Map-ს
const animals = new Map();

animals.set("ძაღლი", "ვაუვ");
animals.set("კატა", "მიო");
animals.set("ძროხა", "მუ");

// for-of ლუპით მხოლოდ value (ხმა)
for (const [animal, sound] of animals) {
  console.log(`${animal} ამბობს: ${sound}`);
}

const names = ["Davit", "Nino", "Davit", "Saba", "Nino"];

// Set ავტომატურად უნიკალურ მნიშვნელობებს ტოვებს
const uniqueNames = new Set(names);

console.log(uniqueNames); 


console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 1000);

setTimeout(() => {
  console.log("End");
}, 2000);


const tickets = ["Nino", "Davit", "Nino", "Saba", "Davit", "Luka"];

// ვინმეს ორჯერ არ გავატაროთ
const checked = new Set(tickets);

console.log("ბილეთები შემოწმებულია:", checked);
