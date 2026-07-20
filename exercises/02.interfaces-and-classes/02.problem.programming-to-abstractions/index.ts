// Programming to Abstractions

interface PaymentMethod {
	pay(amount: number): string
}

class CreditCard implements PaymentMethod {
	cardNumber: string

	constructor(cardNumber: string) {
		this.cardNumber = cardNumber
	}

	pay(amount: number): string {
		return `Paid $${amount} with credit card ${this.cardNumber}`
	}
}

class PayPal implements PaymentMethod {
	email: string

	constructor(email: string) {
		this.email = email
	}

	pay(amount: number): string {
		return `Paid $${amount} with PayPal ${this.email}`
	}
}

// 🐨 Create a processPayment function:
// - Parameters: method: PaymentMethod, amount: number
// - Returns: the payment result string for that method and amount
// - Type the first parameter as PaymentMethod, not a concrete class
//
// Expected results (using the classes above):
// processPayment(new CreditCard('1234-5678-9012-3456'), 100)
// → "Paid $100 with credit card 1234-5678-9012-3456"
// processPayment(new PayPal('user@example.com'), 50)
// → "Paid $50 with PayPal user@example.com"

// Optional smoke test:
// const creditCard = new CreditCard('1234-5678-9012-3456')
// const paypal = new PayPal('user@example.com')
// console.log(processPayment(creditCard, 100))
// console.log(processPayment(paypal, 50))

export {
	CreditCard,
	PayPal,
	// processPayment
}
