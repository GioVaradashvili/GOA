// მშობელი კლასი - Shape
class Shape {
  constructor(width, height, color, coordinates) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.coordinates = coordinates; // ფორმატში [x, y]
  }

  // მეთოდები:
  changeWidth(newWidth) {
    this.width = newWidth;
  }

  changeHeight(newHeight) {
    this.height = newHeight;
  }

  changeColor(newColor) {
    this.color = newColor;
  }

  changeCoordinates(newCoordinates) {
    if (Array.isArray(newCoordinates) && newCoordinates.length === 2) {
      this.coordinates = newCoordinates;
    } else {
      console.log("კოორდინატები უნდა იყოს სია ორ ელემენტიანი");
    }
  }

  draw() {
    console.log(
      `კოორდინატებზე - ${this.coordinates} იხატება ფიგურა, რომლის ზომებია ${this.height}/${this.width}, რომლის ფერია ${this.color}.`
    );
  }
}
