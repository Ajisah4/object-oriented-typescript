import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('Shape class should be exported', () => {
	assert.ok(
		'Shape' in solution,
		'🚨 Make sure you export "Shape" - add: export { Shape, Circle, Rectangle }',
	)
})

await test('Circle class should be exported', () => {
	assert.ok(
		'Circle' in solution,
		'🚨 Make sure you export "Circle" - add: export { Shape, Circle, Rectangle }',
	)
})

await test('Rectangle class should be exported', () => {
	assert.ok(
		'Rectangle' in solution,
		'🚨 Make sure you export "Rectangle" - add: export { Shape, Circle, Rectangle }',
	)
})

await test('Shape getArea should return 0', () => {
	const baseShape = new solution.Shape('red')
	assert.strictEqual(
		baseShape.getArea(),
		0,
		'🚨 Shape.getArea() should return 0',
	)
})

await test('Circle should override getArea to calculate circle area', () => {
	const sampleCircle = new solution.Circle('red', 5)
	const circleArea = sampleCircle.getArea()
	assert.ok(
		Math.abs(circleArea - Math.PI * 25) < 0.01,
		'🚨 Circle.getArea() for radius 5 should be within 0.01 of Math.PI * 25',
	)
	assert.ok(
		Math.abs(circleArea - 78.54) < 0.01,
		'🚨 Circle.getArea() for radius 5 should be about 78.54',
	)
})

await test('Rectangle should override getArea to calculate rectangle area', () => {
	const sampleRectangle = new solution.Rectangle('blue', 10, 20)
	const rectangleArea = sampleRectangle.getArea()
	assert.strictEqual(
		rectangleArea,
		200,
		'🚨 Rectangle.getArea() for 10×20 should return 200',
	)
})

await test('Different shapes should have different area calculations', () => {
	const sampleCircle = new solution.Circle('red', 5)
	const sampleRectangle = new solution.Rectangle('blue', 10, 20)
	const circleArea = sampleCircle.getArea()
	const rectangleArea = sampleRectangle.getArea()

	assert.ok(circleArea > 0, '🚨 Circle.getArea() should be greater than 0')
	assert.ok(
		rectangleArea > 0,
		'🚨 Rectangle.getArea() should be greater than 0',
	)
	assert.notStrictEqual(
		circleArea,
		rectangleArea,
		'🚨 Circle and Rectangle getArea() results should differ for these fixtures',
	)
})
