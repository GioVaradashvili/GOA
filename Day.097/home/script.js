// 1. ობიექტის შექმნა
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Black",
    weight: "1500kg",
    
    // 2. მეთოდის დამატება
    getInfo: function() {
        return `ამ მანქანის ბრენდია ${this.brand}, კონკრეტული მოდელია ${this.model}, გამოშვების წელი არის ${this.year}, ფერი არის ${this.color}, წონა კი შეადგენს ${this.weight}.`;
    }
};

// 3. ინდივიდუალური თვისებების გამოტანა
console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.color);
console.log(car.weight);

// 4. თვისებების შეცვლა
car.brand = "BMW";
car.model = "X5";
car.year = 2023;
car.color = "White";
car.weight = "2000kg";

// 5. ახალი თვისების დამატება
car.mode = "Automatic";

// 6. დამატებული თვისების წაშლა
delete car.mode;

// 7. პირობითი განცხადება
let myCarBrand = "BMW"; // თქვენი მანქანის ბრენდი

if (car.brand === myCarBrand) {
    console.log("იგივე მანქანის ბრენდი გვყოლია ძმობილო");
} else {
    console.log("სხვადასხვა მანქანის ბრენდია, ჩემი მოუგებს");
}
console.log(car.getInfo());