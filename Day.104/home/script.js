// Task 1: Array Manipulation
function comprehensiveArrayTask(arr1, arr2, arr3) {
    let mergedArray = arr1.concat(arr2);
    mergedArray.copyWithin(5, 0, 3);
    mergedArray.fill(0, 6);
    mergedArray.pop();
    mergedArray.shift();
    mergedArray.unshift(100, 200);
    mergedArray.splice(2, 2, ...arr3);
    let slicedArray = mergedArray.slice(-5);
    return slicedArray.join(',');
}

// Task 2: Student Grades Management
let students = ["Alice", "Bob", "Charlie"];
let grades = [85, 92, 78];

function addStudent(student, grade) {
    students.unshift(student);
    grades.unshift(grade);
    return { students, grades };
}

function removeLastStudent() {
    students.pop();
    grades.pop();
    return { students, grades };
}

function replaceGrade(index, newGrade) {
    grades.splice(index, 1, newGrade);
    return grades;
}

function updateGrades(newGrade) {
    grades.fill(newGrade);
    return grades;
}

// Task 3: Playlist Management
let playlist = ["Song1", "Song2", "Song3"];

function addSong(song) {
    playlist.unshift(song);
    return playlist;
}

function removeLastSong() {
    playlist.pop();
    return playlist;
}

function moveSongs() {
    playlist.copyWithin(playlist.length, 0, 2);
    return playlist;
}

function combinePlaylists(secondPlaylist) {
    return playlist.concat(secondPlaylist);
}

// Task 4: Shopping Cart
let cartItems = ["Item1", "Item2", "Item3"];
let prices = [10, 20, 30];

function addItem(item, price) {
    cartItems.unshift(item);
    prices.unshift(price);
    return { cartItems, prices };
}

function removeFirstItem() {
    cartItems.shift();
    prices.shift();
    return { cartItems, prices };
}

function replaceItem(index, newItem, newPrice) {
    cartItems.splice(index, 1, newItem);
    prices.splice(index, 1, newPrice);
    return { cartItems, prices };
}

function createReceipt() {
    return cartItems.join(',');
}

function applyDiscount(discountPrice) {
    prices.fill(discountPrice);
    return prices;
}
// Task 5: Library Management System
let library = [
    { title: "Book1", copies: 5 },
    { title: "Book2", copies: 3 },
    { title: "Book3", copies: 7 }
];

function addBook(book) {
    library.push(book);
    return library;
}

function removeLastBook() {
    library.pop();
    return library;
}

function updateBookCopies(title, copies) {
    let index = library.findIndex(book => book.title === title);
    if (index !== -1) {
        library.splice(index, 1, { ...library[index], copies });
    }
    return library;
}

function listBooks() {
    return library.map(book => book.title).join(',');
}

function extractBooks(start, end) {
    return library.slice(start, end);
}

function modifyBooks() {
    library.copyWithin(library.length - 1, 0, 1);
    return library;
}

function resetCopies(copies) {
    library = library.map(book => ({ ...book, copies }));
    return library;
}

function removeFirstBook() {
    library.shift();
    return library;
}

function addFirstBook(book) {
    library.unshift(book);
    return library;
}