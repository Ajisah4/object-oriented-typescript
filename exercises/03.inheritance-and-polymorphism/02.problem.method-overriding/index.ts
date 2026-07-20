// Method Overriding

class Shape {
	color: string

	constructor(color: string) {
		this.color = color
	}

	// 🐨 Add getArea(): number that returns 0
}

class Circle extends Shape {
	radius: number

	constructor(color: string, radius: number) {
		super(color)
		this.radius = radius
	}

	// 🐨 Override getArea() so area is π × radius² (use Math.PI)
	// Example: new Circle('red', 5).getArea() ≈ 78.54
}

class Rectangle extends Shape {
	width: number
	height: number

	constructor(color: string, width: number, height: number) {
		super(color)
		this.width = width
		this.height = height
	}

	// 🐨 Override getArea() so area is width × height
	// Example: new Rectangle('blue', 10, 20).getArea() === 200
}

// Optional smoke test:
// const circle = new Circle('red', 5)
// const rectangle = new Rectangle('blue', 10, 20)
// console.log(circle.getArea()) // ~78.54
// console.log(rectangle.getArea()) // 200

// 🐨 Keep exporting the classes
// export { Shape, Circle, Rectangle }
