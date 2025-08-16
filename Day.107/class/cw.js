function calculateNumbers(a, b, ...rest) {
  // პირველ ორ არგუმენტს ვინახავთ ცვლადებში
  console.log("პირველი რიცხვი:", a);
  console.log("მეორე რიცხვი:", b);

  // მათი ნამრავლი
  const product = a * b;
  console.log("ნამრავლი:", product);

  // დანარჩენი რიცხვების სიას ვიღებთ rest-ით
  console.log("დანარჩენი რიცხვები:", rest);

  // rest მასივის ჯამი
  const sum = rest.reduce((acc, val) => acc + val, 0);
  console.log("დანარჩენების ჯამი:", sum);
}

// გამოძახება მინიმუმ 5 არგუმენტით
calculateNumbers(2, 3, 4, 5, 6, 7); 


const list1 = [1, 2];
const list2 = [3, 4];
const list3 = [5, 6];

// spread ოპერატორით დაშლა და ახალ სიაში ჩასმა + დამატებითი ელემენტები
const combinedList = [...list1, ...list2, ...list3, 7, 8, 9, 'a', 'b'];

console.log("გაერთიანებული სია:", combinedList);
// შედეგი: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b']
