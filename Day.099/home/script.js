// 1. Basic Object Initialization

// Create an object named student with the specified properties
let student = {
    name: "John Doe",
    age: 20,
    grade: "A",
    isEnrolled: true,
    
    // Add a method called getInfo() that returns a formatted string with the student's details
    getInfo: function() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}, Enrolled: ${this.isEnrolled}`;
    }
};

// Log the student's information
console.log(student.getInfo());

// Update the student's grade to a new value
student.grade = "A+";

// Log the updated object
console.log(student.getInfo());
// 4. Product Inventory Display

// Create 3 product objects
let product1 = {
    productName: "Laptop",
    price: 1000,
    quantity: 5,
    isAvailable: true
};

let product2 = {
    productName: "Smartphone",
    price: 500,
    quantity: 0,
    isAvailable: false
};

let product3 = {
    productName: "Tablet",
    price: 300,
    quantity: 10,
    isAvailable: true
};

// Create an inventory object containing the 3 products
let inventory = {
    product1: product1,
    product2: product2,
    product3: product3,

    // Method to display available products
    displayAvailableProducts: function() {
        if (this.product1.isAvailable && this.product1.quantity > 0) {
            console.log(`Product: ${this.product1.productName}, Price: ${this.product1.price}, Quantity: ${this.product1.quantity}`);
        }
        if (this.product2.isAvailable && this.product2.quantity > 0) {
            console.log(`Product: ${this.product2.productName}, Price: ${this.product2.price}, Quantity: ${this.product2.quantity}`);
        }
        if (this.product3.isAvailable && this.product3.quantity > 0) {
            console.log(`Product: ${this.product3.productName}, Price: ${this.product3.price}, Quantity: ${this.product3.quantity}`);
        }
    }
};

// Display available products
inventory.displayAvailableProducts();