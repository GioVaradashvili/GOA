// 1. შექმენით academy ობიექტი
const academy = {
    name: "Code Academy",
    courses: ["JavaScript", "Python", "Java"],
    socialLink: "https://codeacademy.com",
    reviews: {
        user1: {
            name: "John Doe",
            status: "parent",
            review: "Great academy!"
        },
        user2: {
            name: "Jane Smith",
            status: "child",
            review: "Learned a lot!"
        },
        user3: {
            name: "Sam Brown",
            status: "parent",
            review: "Highly recommend!"
        }
    }
};
// 1. გამოიტანეთ ობიექტის თვისება-მნიშვნელობების სია
console.log(Object.entries(academy));
// 2. გამოიტანეთ ობიექტის თვისებების სია
console.log(Object.keys(academy));
// 3. გამოიტანეთ ობიექტის მნიშვნელობების სია
console.log(Object.values(academy));
// 4. შეამოწმეთ ობიექტს გააჩნია თუ არა რომელიმე თვისება
console.log(academy.hasOwnProperty('courses'));
// 5. ეს ობიექტი გააერთიანეთ ახალ ობიექტთან, რომელშიც იქნება შეტანილი member თვისება
const newAcademy = {
    ...academy,
    member: "Gold"
};
console.log(newAcademy);
// 6. გაყინეთ ობიექტი
Object.freeze(academy);
// 7. შეამოწმეთ გაყინულია თუ არა ობიექტი