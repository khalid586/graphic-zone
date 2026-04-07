import { sql } from 'drizzle-orm';
import {
    integer,
    text,
    real,
    blob,
    sqliteTable,
} from 'drizzle-orm/sqlite-core';

// Users table
export const users = sqliteTable('users', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password'),
    phone: text('phone'),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
        .default(sql`(cast(unixepoch('now') * 1000 as integer))`),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
        .default(sql`(cast(unixepoch('now') * 1000 as integer))`),
});

// Profiles table
export const profiles = sqliteTable('profiles', {
    id: integer('id').primaryKey(),
    userId: integer('user_id')
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    bio: text('bio'),
    avatar: text('avatar'),
    phone: text('phone'),
    address: text('address'),
    city: text('city'),
    country: text('country'),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
        .default(sql`(cast(unixepoch('now') * 1000 as integer))`),
});

// Invoices table
export const invoices = sqliteTable('invoices', {
    id: integer('id').primaryKey(),
    userId: integer('user_id')
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    invoiceNumber: text('invoice_number').notNull().unique(),
    status: text('status', {
        enum: ['draft', 'sent', 'paid', 'overdue'],
    }).default('draft'),
    amount: real('amount').notNull(),
    currency: text('currency').default('USD'),
    description: text('description'),
    dueDate: integer('due_date', { mode: 'timestamp_ms' }),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
        .default(sql`(cast(unixepoch('now') * 1000 as integer))`),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
        .default(sql`(cast(unixepoch('now') * 1000 as integer))`),
});

// Invoice Items table
export const invoiceItems = sqliteTable('invoice_items', {
    id: integer('id').primaryKey(),
    invoiceId: integer('invoice_id')
        .notNull()
        .references(() => invoices.id, { onDelete: 'cascade' }),
    description: text('description').notNull(),
    quantity: real('quantity').notNull(),
    unitPrice: real('unit_price').notNull(),
    total: real('total').notNull(),
});

// Payments table
export const payments = sqliteTable('payments', {
    id: integer('id').primaryKey(),
    invoiceId: integer('invoice_id')
        .notNull()
        .references(() => invoices.id, { onDelete: 'cascade' }),
    method: text('method', {
        enum: ['card', 'bank_transfer', 'paypal'],
    }).notNull(),
    amount: real('amount').notNull(),
    status: text('status', {
        enum: ['pending', 'completed', 'failed'],
    }).default('pending'),
    transactionId: text('transaction_id'),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
        .default(sql`(cast(unixepoch('now') * 1000 as integer))`),
});
