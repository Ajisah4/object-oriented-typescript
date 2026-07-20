// Inventory Manager - OOP Practice Utilities
// Implement the classes and interfaces marked with 🐨

// ============================================================================
// Interfaces
// ============================================================================

// 🐨 Create a Sellable interface with:
// - calculatePrice(quantity: number): number
// - applyDiscount(percent: number): void

// 🐨 Create a Trackable interface with:
// - getTrackingInfo(): string
// - updateLocation(location: string): void

// ============================================================================
// Base Class
// ============================================================================

// 🐨 Implement InventoryItem with:
// - private fields for id and quantity (use #)
// - public fields name and basePrice
// - methods: getId, getQuantity, adjustQuantity, getDescription
// Example: getDescription() can start as just the item name

// ============================================================================
// Inventory Item Types
// ============================================================================

// 🐨 Implement Electronics to extend InventoryItem and implement Sellable, Trackable
// - fields: brand, model, serialNumber, warrantyMonths, location, discountPercent
// - calculatePrice / applyDiscount
//   Example check: basePrice 1000, discountPercent 10, calculatePrice(2) → 1800
// - getTrackingInfo() includes serialNumber and location
// - updateLocation(location) is reflected in later tracking reads
// - override getDescription to include name, brand, and model
//   (exact wording is up to you — e.g. it might mention Laptop / Nova / X15)

// 🐨 Implement Clothing to extend InventoryItem and implement Sellable
// - fields: size, color, discountPercent
// - same pricing behavior as Electronics
// - override getDescription to include name, size, and color
//   (exact wording is up to you)

// 🐨 Implement Perishable to extend InventoryItem
// - field: expirationDate
// - override getDescription to include name and expiration date
//   (exact wording is up to you)

// ============================================================================
// Composition & Dependency Injection
// ============================================================================

// 🐨 Create a Logger class with:
// - log(message: string): string
// - Returns the same message it received (no required prefix)

// 🐨 Extend Logger with ConsoleLogger
// - override log to print the message and return that same message

// 🐨 Extend Logger with InMemoryLogger
// - store each message privately (the same string passed to log)
// - return that same message from log()
// - getLogs(): Array<string> returns the stored messages

// 🐨 Implement InventoryManager using dependency injection for logging
// - constructor(logger: Logger)
// - receiveStock(name, quantity) logs a receive action that mentions name/qty
// - shipStock(name, quantity) logs a ship action that mentions name/qty

export {}
