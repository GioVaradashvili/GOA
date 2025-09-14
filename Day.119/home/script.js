class OrderManager {
  constructor() {
    this.activeOrders = new Map();   // აქტიური შეკვეთები
    this.completedOrders = new Set(); // დასრულებული შეკვეთები
  }

  processOrder(orderId, customerName, callback) {
    // დავამატოთ ახალი შეკვეთა activeOrders-ში
    this.activeOrders.set(orderId, customerName);
    console.log(`➡️ მიღებულია ახალი შეკვეთა #${orderId} მომხმარებლისგან: ${customerName}`);

    // 3 წამში "შევასრულებთ"
    setTimeout(() => {
      // ამოშლა activeOrders-დან
      this.activeOrders.delete(orderId);

      // completedOrders-ში ჩამატება
      this.completedOrders.add(customerName);

      // callback გამოძახება
      callback(orderId);

      // სტატუსის ბეჭდვა
      this.printStatus();
    }, 3000);
  }

  printStatus() {
    console.log("📦 აქტიური შეკვეთები:");
    for (const [id, name] of this.activeOrders) {
      console.log(`   #${id} - ${name}`);
    }

    console.log("✅ დასრულებული შეკვეთები:");
    for (const name of this.completedOrders) {
      console.log(`   ${name}`);
    }
  }
}

// --- callback ფუნქცია გარეთ ---
function callBack(orderId) {
  console.log(`✔️ შეკვეთა #${orderId} დამთავრდა`);
}

// --- გამოვცადოთ ---
const manager = new OrderManager();

manager.processOrder(1, "Nino", callBack);
manager.processOrder(2, "Davit", callBack);
manager.processOrder(3, "Saba", callBack);
