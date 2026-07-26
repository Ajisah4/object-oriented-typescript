// Private Fields and Defaults

// Create User class
class User {
	name: string
	email: string
	role: string

	constructor(name: string, email: string, role: string = 'user') {
		this.name = name
		this.email = email
		this.role = role
	}
}

// Create BankAccount class
class BankAccount {
	accountNumber: string
	#balance: number

	constructor(accountNumber: string) {
		this.accountNumber = accountNumber
		this.#balance = 0
	}

	deposit(amount: number): void {
		this.#balance += amount
	}

	getBalance(): number {
		return this.#balance
	}
}

// Create Config class
class Config {
	host: string
	port: number
	debug: boolean

	constructor(
		host: string = 'localhost',
		port: number = 3000,
		debug: boolean = false
	) {
		this.host = host
		this.port = port
		this.debug = debug
	}
}

// Export classes
export { User, BankAccount, Config }
