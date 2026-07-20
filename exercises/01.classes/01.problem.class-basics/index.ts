// Creating Classes

// 🐨 Create a Product class with:
// - Fields: name (string), price (number)
// - Constructor(name, price) that initializes both
// - Method: getDescription() returns exactly:
//   "Product: {name} - ${price}"
//   Example: new Product('Laptop', 999.99).getDescription()
//   → "Product: Laptop - $999.99"

// Optional smoke test:
// const laptop = new Product('Laptop', 999.99)
// const mouse = new Product('Mouse', 29.99)
// console.log(laptop.getDescription())
// console.log(mouse.getDescription())

// 🐨 Create a ShoppingCart class with:
// - Field: items (Array<Product>), starts empty
// - Method: addItem(product: Product) appends to items
// - Method: getTotal() returns the sum of all item prices
//   Example: laptop (999.99) + mouse (29.99) → 1029.98

// Optional smoke test:
// const cart = new ShoppingCart()
// cart.addItem(laptop)
// cart.addItem(mouse)
// console.log(cart.getTotal()) // 1029.98

// 🐨 Export both classes
// export { Product, ShoppingCart }
