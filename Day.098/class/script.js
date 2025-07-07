function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;

    this.introduce = function() {
        console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.profession}.`);
    };
}

// Example usage:
const person1 = new Person('Alice', 30, 'engineer');
person1.introduce(); // Hi, I'm Alice, a 30-year-old engineer.
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    };
}

// Example usage:
const book1 = new Book('1984', 'George Orwell', 1949);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);

console.log(book1.getSummary()); // 1984 by George Orwell, published in 1949
console.log(book2.getSummary()); // To Kill a Mockingbird by Harper Lee, published in 1960
console.log(book3.getSummary()); // The Great Gatsby by F. Scott Fitzgerald, published in 1925
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

    this.changePassword = function(newPassword) {
        this.password = newPassword;
    };

    this.getDetails = function() {
        return {
            username: this.username,
            email: this.email
        };
    };
}

// Example usage:
const user1 = new User('john_doe', 'john@example.com', 'password123');
const user2 = new User('jane_doe', 'jane@example.com', 'password456');

console.log(user1.getDetails()); // { username: 'john_doe', email: 'john@example.com' }
console.log(user2.getDetails()); // { username: 'jane_doe', email: 'jane@example.com' }

user1.changePassword('newpassword123');
console.log(user1); // User { username: 'john_doe', email: 'john@example.com', password: 'newpassword123' }