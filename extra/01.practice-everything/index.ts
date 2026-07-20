// Comprehensive OOP Practice
// Work through each section, implementing the classes and functions as instructed.

// ============================================================================
// SECTION 1: Class Basics
// ============================================================================

// 🐨 Create a class `Product` with:
// - public fields: name (string), price (number)
// - a constructor that takes name and price
// - a method `getDescription()` that returns "{name}: ${price}"
//   Example: new Product('Mug', 12).getDescription() → "Mug: $12"

// 🐨 Create a class `ShoppingCart` with:
// - a public field `items` initialized to an empty array of Product
// - a method `addItem(item: Product)` that adds to items
// - a method `getTotal()` that returns the total price of all items

// Optional smoke test:
// const cart = new ShoppingCart()
// cart.addItem(new Product('Mug', 12))
// cart.addItem(new Product('Notebook', 8))
// console.log(cart.getTotal()) // 20

// ============================================================================
// SECTION 2: Private Fields & Defaults
// ============================================================================

// 🐨 Create a class `BankAccount` with:
// - a private balance field (use #; default 0)
// - deposit(amount) / withdraw(amount) / getBalance()
//   Example: deposit(50), withdraw(10) → getBalance() === 40

// 🐨 Create a class `Config` with:
// - public fields: host (string), port (number), role (string)
// - defaults: host = 'localhost', port = 3000, role = 'user'

// Optional smoke test:
// const account = new BankAccount()
// account.deposit(50)
// account.withdraw(10)
// console.log(account.getBalance()) // 40
// const config = new Config()
// console.log(config.host, config.port, config.role) // localhost 3000 user

// ============================================================================
// SECTION 3: Interfaces & Implementations
// ============================================================================

// 🐨 Create an interface `PaymentMethod` with:
// - pay(amount: number): string

// 🐨 Create a class `CreditCard` that implements PaymentMethod
// - public field: cardNumber (string)
// - pay returns "Paid $${amount} with card ${cardNumber}"
//   Example: new CreditCard('1234').pay(25) → "Paid $25 with card 1234"

// 🐨 Create a class `PayPal` that implements PaymentMethod
// - public field: email (string)
// - pay returns "Paid $${amount} with PayPal ${email}"
//   Example: new PayPal('user@example.com').pay(25)
//   → "Paid $25 with PayPal user@example.com"

// Optional smoke test:
// const card = new CreditCard('1234')
// const paypal = new PayPal('user@example.com')
// console.log(card.pay(25))
// console.log(paypal.pay(25))

// ============================================================================
// SECTION 4: Programming to Abstractions
// ============================================================================

// 🐨 Create a function `processPayment` that:
// - takes a PaymentMethod and an amount
// - returns that method's payment result for the amount

// 🐨 Create a class `GiftCard` that implements PaymentMethod
// - public field: code (string)
// - pay returns "Paid $${amount} with gift card ${code}"

// Test Section 4:
// console.log(processPayment(card, 40))
// console.log(processPayment(new GiftCard('GC-001'), 40))

// ============================================================================
// SECTION 5: Inheritance
// ============================================================================

// 🐨 Create a base class `Package` with:
// - public fields: label (string), weight (number)
// - a method `getLabel()` that returns "{label} ({weight}kg)"

// 🐨 Create a class `Box` that extends Package
// - add a field `width` (number)
// - call super in the constructor

// 🐨 Create a class `Crate` that extends Package
// - add a field `material` (string)
// - call super in the constructor

// Test Section 5:
// const box = new Box('Box A', 5, 10)
// const crate = new Crate('Crate B', 20, 'wood')
// console.log(box.getLabel())
// console.log(crate.getLabel())

// ============================================================================
// SECTION 6: Method Overriding
// ============================================================================

// 🐨 Create a class `Shape` with:
// - a method `getArea()` that returns 0

// 🐨 Create a class `Circle` that extends Shape
// - field: radius (number)
// - override getArea for a circle (π × radius²; use Math.PI)
//   Example: new Circle(2).getArea() ≈ 12.57

// 🐨 Create a class `Rectangle` that extends Shape
// - fields: width (number), height (number)
// - override getArea for a rectangle
//   Example: new Rectangle(3, 4).getArea() === 12

// Optional smoke test:
// console.log(new Circle(2).getArea())
// console.log(new Rectangle(3, 4).getArea())

// ============================================================================
// SECTION 7: Substitutability
// ============================================================================

// 🐨 Create a class `MediaFile` with:
// - a public field `filename` (string)
// - a method `play()` that returns "Playing {filename}"

// 🐨 Create a class `AudioFile` that extends MediaFile
// - override play to return "Playing audio {filename}"
//   Example: "Playing audio song.mp3"

// 🐨 Create a class `VideoFile` that extends MediaFile
// - override play to return "Playing video {filename}"
//   Example: "Playing video movie.mp4"

// 🐨 Create a class `MediaPlayer` with:
// - playFile(file: MediaFile) returns that file's play result string
//   (parameter type must be the base MediaFile)

// Optional smoke test:
// const player = new MediaPlayer()
// console.log(player.playFile(new AudioFile('song.mp3')))
// console.log(player.playFile(new VideoFile('movie.mp4')))

// ============================================================================
// SECTION 8: Composition & Dependency Injection
// ============================================================================

// 🐨 Create a class `Logger` with:
// - log(message: string) returns the prefixed string `Log: {message}`

// 🐨 Create a class `ConsoleLogger` that extends Logger
// - override log to print and return that same prefixed string

// 🐨 Create a class `InMemoryLogger` that extends Logger
// - store the raw message argument privately (not the prefixed return value)
// - still return the prefixed `Log: {message}` string from log()
// - getLogs() returns a copy of the stored raw messages

// 🐨 Create a class `ReportService` that takes a Logger in its constructor
// - generateReport(title) logs "Report: {title}" through the injected logger
//
// Example:
// const logger = new InMemoryLogger()
// new ReportService(logger).generateReport('Weekly Summary')
// logger.getLogs() includes "Report: Weekly Summary"
// (the argument passed to log — not "Log: Report: Weekly Summary")

// Optional smoke test:
// const logger = new InMemoryLogger()
// const service = new ReportService(logger)
// service.generateReport('Weekly Summary')
// console.log(logger.getLogs())

export {}
