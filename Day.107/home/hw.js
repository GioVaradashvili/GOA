// Rest ოპერატორი (...variableName) გამოიყენება "დარჩენილი" მნიშვნელობების ერთ მასივში ან ობიექტში შესაგროვებლად
function sum(a, b, ...rest) {
  console.log(rest); // [3, 4, 5] — მესამე არგუმენტიდან ყველაფერი rest-ში მოაქცია
  return a + b + rest.reduce((acc, val) => acc + val, 0);
}

sum(1, 2, 3, 4, 5);

// Spread ოპერატორი (...variableName) გამოიყენება მასივის ან ობიექტის დაშლას/გაშლას სხვა მასივში ან ობიექტში
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

const person = {
  name: 'Giorgi',
  age: 25,
  height: 180
};

// ვშლით name ცალკე, ხოლო დანარჩენს rest-ში ვაგროვებთ
const { name, ...restInfo } = person;

console.log(name);      // Giorgi
console.log(restInfo);  // { age: 25, height: 180 }

// Rest ოპერატორი — ფუნქციაში n რაოდენობის სახელის მისაღებად
function printNames(...names) {
  names.forEach(name => console.log(name));
}

// სახელების სია
const namesArray = ['Luka', 'Nino', 'Tamar'];

// Spread ოპერატორი — მასივის დაშლა ცალკეულ არგუმენტებად
printNames(...namesArray);
