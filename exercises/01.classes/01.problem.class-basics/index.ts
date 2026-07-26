// Creating Classes

// Create Product class
class Product {
	name: string
	price: number

	constructor(name: string, price: number) {
		this.name = name
		this.price = price
	}

	getDescription(): string {
		return `Product: ${this.name} - $${this.price}`
	}
}

// Create ShoppingCart class
class ShoppingCart {
	items: Product[]

	constructor() {
		this.items = []
	}

	addItem(product: Product): void {
		this.items.push(product)
	}

	getTotal(): number {
		return this.items.reduce((total, item) => total + item.price, 0)
	}
}

// Export classes
export { Product, ShoppingCart }
