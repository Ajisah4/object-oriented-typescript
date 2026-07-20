import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('Product class should be exported', () => {
	assert.ok(
		'Product' in solution,
		'🚨 Make sure you export "Product" - add: export { Product, ShoppingCart }',
	)
})

await test('ShoppingCart class should be exported', () => {
	assert.ok(
		'ShoppingCart' in solution,
		'🚨 Make sure you export "ShoppingCart" - add: export { Product, ShoppingCart }',
	)
})

await test('Product class should create instances with name and price', () => {
	const sampleLaptop = new solution.Product('Laptop', 999.99)
	assert.strictEqual(
		sampleLaptop.name,
		'Laptop',
		'🚨 Product.name should be "Laptop" - check your class property definition',
	)
	assert.strictEqual(
		sampleLaptop.price,
		999.99,
		'🚨 Product.price should be 999.99 - check your class property definition',
	)
})

await test('Product getDescription should return formatted string', () => {
	const sampleLaptop = new solution.Product('Laptop', 999.99)
	assert.strictEqual(
		sampleLaptop.getDescription(),
		'Product: Laptop - $999.99',
		'🚨 getDescription() should return "Product: Laptop - $999.99"',
	)
})

await test('ShoppingCart should initialize with empty items array', () => {
	const emptyCart = new solution.ShoppingCart()
	assert.strictEqual(
		emptyCart.items.length,
		0,
		'🚨 ShoppingCart.items.length should be 0 - check your class property initialization',
	)
})

await test('ShoppingCart addItem should add products to cart', () => {
	const sampleCart = new solution.ShoppingCart()
	const sampleLaptop = new solution.Product('Laptop', 999.99)
	const sampleMouse = new solution.Product('Mouse', 29.99)
	sampleCart.addItem(sampleLaptop)
	const afterFirstAddCount = sampleCart.items.length
	sampleCart.addItem(sampleMouse)

	assert.strictEqual(
		afterFirstAddCount,
		1,
		'🚨 After adding one item, items.length should be 1 - check your addItem method implementation',
	)
	assert.strictEqual(
		sampleCart.items[0]?.name,
		'Laptop',
		'🚨 items[0] should be the laptop product - check your addItem method implementation',
	)

	assert.strictEqual(
		sampleCart.items.length,
		2,
		'🚨 After adding two items, items.length should be 2 - check your addItem method implementation',
	)
	assert.strictEqual(
		sampleCart.items[1]?.name,
		'Mouse',
		'🚨 items[1] should be the mouse product - check your addItem method implementation',
	)
})

await test('ShoppingCart getTotal should calculate sum of all item prices', () => {
	const sampleCart = new solution.ShoppingCart()
	const sampleLaptop = new solution.Product('Laptop', 999.99)
	const sampleMouse = new solution.Product('Mouse', 29.99)
	sampleCart.addItem(sampleLaptop)
	sampleCart.addItem(sampleMouse)

	assert.strictEqual(
		sampleCart.getTotal(),
		1029.98,
		'🚨 getTotal() should return 1029.98 for Laptop (999.99) + Mouse (29.99)',
	)
})
