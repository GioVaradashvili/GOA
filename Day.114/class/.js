class PersianGuineaPig {
  constructor(color, size, birthYear, birthMonth, birthDay) {
    this.color = color;
    this.size = size;
    this.birthDate = new Date(birthYear, birthMonth - 1, birthDay); 
    // JS-ში თვეები იწყება 0-დან, იანვარი = 0
  }

  // მეთოდი რომელიც გამოითვლის წლოვანებას
  calculateAge() {
    const today = new Date(); // დღევანდელი თარიღი
    const birth = this.birthDate;

    // სრული წლის, თვის და დღის გამოთვლა
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    // თუ დღეში უარყოფითია, წინა თვიდან გამოტანა
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    // თუ თვეში უარყოფითია, წელიდან გამოტანა
    if (months < 0) {
      years--;
      months += 12;
    }

    return {
      years: years,
      months: months,
      days: days
    };
  }
}

// ობიექტის შექმნა
const guineaPig = new PersianGuineaPig('white', 'medium', 2021, 3, 5);

// ასაკის გამოთვლა
const age = guineaPig.calculateAge();

console.log(`პერსუსული ზღვის გოჭის ასაკია: ${age.years} წლის, ${age.months} თვის და ${age.days} დღის.`);
