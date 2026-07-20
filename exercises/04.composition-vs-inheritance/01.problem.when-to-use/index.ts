// When to Use Composition vs Inheritance

// 🐨 Create a Logger base class with:
// - log(message: string): void
// - Prints exactly "Log: {message}"

// 🐨 Create a FileLogger class using INHERITANCE (is-a):
// - Extends Logger
// - Override log() to print exactly "File Log: {message}"

// Optional smoke test:
// const fileLogger = new FileLogger()
// fileLogger.log('File system initialized') // File Log: File system initialized

// 🐨 Create a ConsoleLogger class using INHERITANCE (is-a):
// - Extends Logger
// - Override log() to print exactly "Console Log: {message}"

// Optional smoke test:
// const consoleLogger = new ConsoleLogger()
// consoleLogger.log('Console ready') // Console Log: Console ready

// 🐨 Create an EmailService class using COMPOSITION (has-a):
// - Constructor takes a Logger and stores it privately (use #)
// - sendEmail(to, subject): void
// - Must produce "Sending email to {to}: {subject}" through the injected
//   logger AND on the console (both)
//
// With a FileLogger, sendEmail('user@example.com', 'Welcome') should result in
// console output that includes:
//   File Log: Sending email to user@example.com: Welcome
//   Sending email to user@example.com: Welcome

// 🐨 Export all four classes
// export { Logger, FileLogger, ConsoleLogger, EmailService }
