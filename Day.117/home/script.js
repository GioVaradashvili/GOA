class Employee {
  #id;
  #monthSalary;

  constructor(id, firstName, lastName, monthSalary) {
    this.#id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.monthSalary = monthSalary; // setter გამოიძახებს
  }

  // fullName გეტერი/სეტერი
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    if (typeof name !== "string") {
      console.error("შეცდომა: სახელი უნდა იყოს string ტიპის");
      return;
    }

    const parts = name.trim().split(" ");
    if (parts.length !== 2) {
      console.error("შეცდომა: ფორმატი უნდა იყოს 'სახელი გვარი'");
      return;
    }

    [this.firstName, this.lastName] = parts;
  }

  // yearSalary - მხოლოდ გეტერი
  get yearSalary() {
    return this.#monthSalary * 12;
  }

  // monthSalary გეტერი/სეტერი (ვალიდაცია)
  get monthSalary() {
    return this.#monthSalary;
  }

  set monthSalary(value) {
    if (typeof value !== "number" || value <= 0) {
      console.error("შეცდომა: ხელფასი უნდა იყოს დადებითი რიცხვი");
      return;
    }
    this.#monthSalary = value;
  }

  // id გეტერი (სეტერი არ აქვს)
  get id() {
    return this.#id;
  }
}
