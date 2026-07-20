// Dependency Injection - Swapping Implementations

// Base Logger class (for reference from step 01)
class Logger {
	log(message: string): void {
		console.log(`Log: ${message}`)
	}
}

// EmailService using composition (for reference from step 01)
class EmailService {
	#logger: Logger

	constructor(logger: Logger) {
		this.#logger = logger
	}

	sendEmail(to: string, subject: string): void {
		this.#logger.log(`Sending email to ${to}: ${subject}`)
		console.log(`Sending email to ${to}: ${subject}`)
	}
}

// 🐨 Create a MockLogger class that extends Logger:
// - Override log(message) to store messages in order (do not print)
// - getLogs(): Array<string> returns the stored messages
//
// Expected:
// mockLogger.log('Test message 1'); mockLogger.log('Test message 2')
// → getLogs() is ['Test message 1', 'Test message 2']
// After EmailService(mockLogger).sendEmail('test@example.com', 'Test Subject')
// → getLogs() includes 'Sending email to test@example.com: Test Subject'

// 🐨 Create a SilentLogger class that extends Logger:
// - Override log(message) to do nothing (no print / no throw)
// - EmailService + SilentLogger should not throw on sendEmail

// 🐨 Export Logger, EmailService, MockLogger, and SilentLogger
// export { Logger, EmailService, MockLogger, SilentLogger }
