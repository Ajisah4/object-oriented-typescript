// Implementing Interfaces

// 🐨 Create a PaymentMethod interface with:
// - pay(amount: number): string

// 🐨 Create a CreditCard class that implements PaymentMethod:
// - Field: cardNumber (string)
// - Constructor(cardNumber)
// - pay(amount) returns exactly:
//   "Paid $${amount} with credit card ${cardNumber}"
//   Example: new CreditCard('1234-5678-9012-3456').pay(100)
//   → "Paid $100 with credit card 1234-5678-9012-3456"

// Optional smoke test:
// const creditCard = new CreditCard('1234-5678-9012-3456')
// console.log(creditCard.pay(100))

// 🐨 Create a PayPal class that implements PaymentMethod:
// - Field: email (string)
// - Constructor(email)
// - pay(amount) returns exactly:
//   "Paid $${amount} with PayPal ${email}"
//   Example: new PayPal('user@example.com').pay(50)
//   → "Paid $50 with PayPal user@example.com"

// Optional smoke test:
// const paypal = new PayPal('user@example.com')
// console.log(paypal.pay(50))

// 🐨 Export the classes (PaymentMethod does not need to be exported)
// export { CreditCard, PayPal }
