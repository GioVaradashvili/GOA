// 1. Object Constructor
function User(name, lastName, phoneNumber, email, password, confirmPassword) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
}

// 2. Create 3 objects for different users
const user1 = new User('John', 'Doe', '123-456-7890', 'john.doe@example.com', 'password123', 'password123');
const user2 = new User('Jane', 'Smith', '098-765-4321', 'jane.smith@example.com', 'password456', 'password456');
const user3 = new User('Alice', 'Johnson', '555-555-5555', 'alice.johnson@example.com', 'password789', 'password789');

// 3. Print a sentence from each user's object
console.log(`ჩემის სახელია ${user1.name}, ჩემი გვარია ${user1.lastName}, ჩემი ტელეფონის ნომერია ${user1.phoneNumber}, ჩემი ელფოსტაა ${user1.email}.`);
console.log(`ჩემის სახელია ${user2.name}, ჩემი გვარია ${user2.lastName}, ჩემი ტელეფონის ნომერია ${user2.phoneNumber}, ჩემი ელფოსტაა ${user2.email}.`);
console.log(`ჩემის სახელია ${user3.name}, ჩემი გვარია ${user3.lastName}, ჩემი ტელეფონის ნომერია ${user3.phoneNumber}, ჩემი ელფოსტაა ${user3.email}.`);