import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

function captureConsoleLog(run: () => void): Array<string> {
	const lines: Array<string> = []
	const original = console.log
	console.log = (...args: Array<unknown>) => {
		lines.push(args.map(String).join(' '))
	}
	try {
		run()
	} finally {
		console.log = original
	}
	return lines
}

await test('Logger class should be exported', () => {
	assert.ok(
		'Logger' in solution,
		'🚨 Make sure you export "Logger" - add: export { Logger, FileLogger, ConsoleLogger, EmailService }',
	)
})

await test('FileLogger class should be exported', () => {
	assert.ok(
		'FileLogger' in solution,
		'🚨 Make sure you export "FileLogger" - add: export { Logger, FileLogger, ConsoleLogger, EmailService }',
	)
})

await test('ConsoleLogger class should be exported', () => {
	assert.ok(
		'ConsoleLogger' in solution,
		'🚨 Make sure you export "ConsoleLogger" - add: export { Logger, FileLogger, ConsoleLogger, EmailService }',
	)
})

await test('EmailService class should be exported', () => {
	assert.ok(
		'EmailService' in solution,
		'🚨 Make sure you export "EmailService" - add: export { Logger, FileLogger, ConsoleLogger, EmailService }',
	)
})

await test('FileLogger should extend Logger (inheritance)', () => {
	const fileLogger = new solution.FileLogger()
	assert.ok(
		fileLogger instanceof solution.Logger,
		'🚨 FileLogger should be an instance of Logger - check that FileLogger extends Logger',
	)
})

await test('ConsoleLogger should extend Logger (inheritance)', () => {
	const consoleLogger = new solution.ConsoleLogger()
	assert.ok(
		consoleLogger instanceof solution.Logger,
		'🚨 ConsoleLogger should be an instance of Logger - check that ConsoleLogger extends Logger',
	)
})

await test('Logger log formats should match the required prefixes', () => {
	const baseLines = captureConsoleLog(() => {
		new solution.Logger().log('hello')
	})
	const fileLines = captureConsoleLog(() => {
		new solution.FileLogger().log('hello')
	})
	const consoleLines = captureConsoleLog(() => {
		new solution.ConsoleLogger().log('hello')
	})

	assert.ok(
		baseLines.includes('Log: hello'),
		'🚨 Logger.log("hello") should print "Log: hello"',
	)
	assert.ok(
		fileLines.includes('File Log: hello'),
		'🚨 FileLogger.log("hello") should print "File Log: hello"',
	)
	assert.ok(
		consoleLines.includes('Console Log: hello'),
		'🚨 ConsoleLogger.log("hello") should print "Console Log: hello"',
	)
})

await test('EmailService should accept any Logger (composition)', () => {
	const fileLogger = new solution.FileLogger()
	const consoleLogger = new solution.ConsoleLogger()
	const emailService1 = new solution.EmailService(fileLogger)
	const emailService2 = new solution.EmailService(consoleLogger)

	assert.ok(
		emailService1 !== undefined,
		'🚨 EmailService should be defined when passed FileLogger - check your constructor accepts Logger type',
	)
	assert.ok(
		emailService2 !== undefined,
		'🚨 EmailService should be defined when passed ConsoleLogger - check your constructor accepts Logger type',
	)
})

await test('EmailService sendEmail should use the injected logger and print the send action', () => {
	const fileLogger = new solution.FileLogger()
	const emailService = new solution.EmailService(fileLogger)
	assert.ok(
		typeof emailService.sendEmail === 'function',
		'🚨 EmailService.sendEmail should be a function - check your method definition',
	)

	const lines = captureConsoleLog(() => {
		emailService.sendEmail('user@example.com', 'Welcome')
	})

	assert.ok(
		lines.includes('File Log: Sending email to user@example.com: Welcome'),
		'🚨 After sendEmail("user@example.com", "Welcome") with FileLogger, output should include "File Log: Sending email to user@example.com: Welcome"',
	)
	assert.ok(
		lines.includes('Sending email to user@example.com: Welcome'),
		'🚨 After sendEmail("user@example.com", "Welcome"), output should also include "Sending email to user@example.com: Welcome"',
	)
})

await test('EmailService should work with different logger types', () => {
	const fileLogger = new solution.FileLogger()
	const consoleLogger = new solution.ConsoleLogger()
	const emailService1 = new solution.EmailService(fileLogger)
	const emailService2 = new solution.EmailService(consoleLogger)

	assert.ok(
		emailService1 instanceof solution.EmailService,
		'🚨 emailService1 should be an instance of EmailService - check your class definition',
	)
	assert.ok(
		emailService2 instanceof solution.EmailService,
		'🚨 emailService2 should be an instance of EmailService - check your class definition',
	)

	const consoleLines = captureConsoleLog(() => {
		emailService2.sendEmail('admin@example.com', 'Alert')
	})
	assert.ok(
		consoleLines.includes(
			'Console Log: Sending email to admin@example.com: Alert',
		),
		'🚨 After sendEmail with ConsoleLogger, output should include "Console Log: Sending email to admin@example.com: Alert"',
	)
})
