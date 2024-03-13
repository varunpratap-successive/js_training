//Question->Create a class Shape with properties width and height and methods getArea().
//Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  getArea() {
    return;
  }
}
class Rectangle extends Shape {
  constructor(height, width) {
    super(height, width);
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.height * this.width;
  }
}

class Triangle extends Shape {
  constructor(height, base) {
    super(height, base);
    this.height = height;
    this.base = base;
  }
  getArea() {
    return 0.5 * this.base * this.height;
  }
}

const ShapeObj = new Shape(2, 4);
const RectangleObj = new Rectangle(2, 4);
const Triangleobj = new Triangle(2, 4);
console.log(RectangleObj.getArea());
console.log(Triangleobj.getArea());
