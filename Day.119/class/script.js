// 1) ვქმნით ახალ Map-ს ზღვის ლომისთვის
const zgvisLomebi = new Map();

// ვამატებთ key-value წყვილებს
zgvisLomebi.set("სახელი", "ლეო");
zgvisLomebi.set("გვარი", "ზღვისლომიძე");
zgvisLomebi.set("საცხოვრებელი", "ოკეანე");
zgvisLomebi.set("ასაკი", 5);

// 2) for-of ლუპით keys() + value ამოღება
for (const key of zgvisLomebi.keys()) {
  console.log(`${key}: ${zgvisLomebi.get(key)}`);
}
