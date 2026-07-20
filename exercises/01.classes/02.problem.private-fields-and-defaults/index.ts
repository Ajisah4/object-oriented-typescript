// Private Fields and Defaults

// 🐨 Create a User class with:
// - name: string
// - email: string
// - role: string (default: 'user' when omitted)
// Initialize fields in the constructor

// Optional smoke test:
// const user = new User('Alice', 'alice@example.com')
// const admin = new User('Bob', 'bob@example.com', 'admin')
// console.log(user.role) // 'user'
// console.log(admin.role) // 'admin'

// 🐨 Create a BankAccount class with:
// - accountNumber: string
// - a private balance field using # (starts at 0)
// - deposit(amount: number) increases the balance by amount
// - getBalance() returns the current balance
// 💰 Private fields can only be read/written inside the class
//
// Example:
// const account = new BankAccount('12345')
// account.getBalance() // 0
// account.deposit(100)
// account.deposit(50)
// account.getBalance() // 150

// 🐨 Create a Config class with constructor defaults:
// - host: string = 'localhost'
// - port: number = 3000
// - debug: boolean = false
//
// Example:
// new Config() → localhost / 3000 / false
// new Config('example.com', 8080, true) → those custom values

// 🐨 Export all three classes
// export { User, BankAccount, Config }
