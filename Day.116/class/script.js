class Transport {
  constructor(maxSpeed, color, fuel) {
    this.maxSpeed = maxSpeed;
    this.color = color;
    this.fuel = fuel;
    this.distanceTraveled = 0;
  }

  // საწვავის შევსება
  refuel(liter) {
    if (typeof liter !== 'number' || liter < 0) {
      console.error("შეცდომა: liter უნდა იყოს არაუარყოფითი რიცხვი");
      return;
    }
    this.fuel += liter;
  }

  // ფერის შეცვლა
  changeColor(color) {
    if (typeof color !== 'string') {
      console.error("შეცდომა: ფერი უნდა იყოს String ტიპის");
      return;
    }
    this.color = color;
  }

  // ინფორმაციის დაბრუნება
  getInfo() {
    return `ეს არის რაღაც ტრანსპორტი, რომლის მაქს. სიჩქარეა - ${this.maxSpeed}; ფერი - ${this.color}; საწვავის რაოდენობა - ${this.fuel}; განვლილი მანძილი - ${this.distanceTraveled}`;
  }

  // გადაადგილება
  move(distance, fuelNeeded) {
    if (
      typeof distance !== 'number' ||
      typeof fuelNeeded !== 'number' ||
      distance < 0 ||
      fuelNeeded < 0
    ) {
      console.error("შეცდომა: distance და fuelNeeded უნდა იყოს არაუარყოფითი რიცხვები");
      return;
    }

    if (this.fuel < fuelNeeded) {
      console.error("შეცდომა: არასაკმარისი საწვავი გადაადგილებისთვის");
      return;
    }

    this.fuel -= fuelNeeded;
    this.distanceTraveled += distance;
    console.log(`ტრანსპორტი გადაადგილდა ${distance} კმ.`);
  }
}
