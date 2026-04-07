# Drizzle + Turso Setup Guide

This project is configured with Drizzle ORM to manage your database using Turso (SQLite HTTP API).

## Getting Started

### 1. **Create a Turso Account & Database**

Visit [turso.tech](https://turso.tech) and create a free account. Then create a new database:

```bash
# You can use the Turso CLI to create a database
turso db create my-database
```

### 2. **Get Your Credentials**

After creating your database, you'll receive:
- **Connection URL**: `libsql://your-db-name-your-org.turso.io`
- **Auth Token**: Your secret authentication token

### 3. **Set Environment Variables**

Copy `.env.example` to `.env.local` and fill in your Turso credentials:

```bash
cp .env.example .env.local
```

Update the values:
```
TURSO_CONNECTION_URL="libsql://your-db-name-your-org.turso.io"
TURSO_AUTH_TOKEN="your-auth-token"
```

### 4. **Generate Migrations**

Generate migration files from your schema:

```bash
npm run db:generate
```

This will create migration files in `src/db/migrations/`.

### 5. **Push to Database**

Apply your schema to the Turso database:

```bash
npm run db:push
```

Or if you prefer to review migrations first:

```bash
npm run db:migrate
```

## Available Scripts

- `npm run db:generate` - Generate migration files from schema changes
- `npm run db:migrate` - Apply pending migrations
- `npm run db:push` - Push schema directly to database (no migration files)
- `npm run db:studio` - Open Drizzle Studio to visualize and manage your database

## Project Structure

```
src/
├── db/
│   ├── index.ts          # Database connection
│   ├── schema.ts         # Database schema definitions
│   └── migrations/       # Generated migration files
```

## Using the Database in Your Code

Import and use the `db` instance anywhere in your application:

```typescript
import { db } from '@/db';
import { users } from '@/db/schema';

// Insert a user
await db.insert(users).values({
  name: 'John Doe',
  email: 'john@example.com',
});

// Query users
const allUsers = await db.select().from(users);

// Update a user
await db.update(users)
  .set({ name: 'Jane Doe' })
  .where(eq(users.id, 1));

// Delete a user
await db.delete(users).where(eq(users.id, 1));
```

## Database Schema

The following tables are currently defined:

### `users`
- `id` (integer, primary key)
- `name` (text)
- `email` (text, unique)
- `password` (text, optional)
- `phone` (text, optional)
- `createdAt` (timestamp)
- `updatedAt` (timestamp)

### `profiles`
- `id` (integer, primary key)
- `userId` (foreign key → users)
- `bio` (text)
- `avatar` (text)
- `phone` (text)
- `address` (text)
- `city` (text)
- `country` (text)
- `createdAt` (timestamp)

### `invoices`
- `id` (integer, primary key)
- `userId` (foreign key → users)
- `invoiceNumber` (text, unique)
- `status` (enum: draft, sent, paid, overdue)
- `amount` (real)
- `currency` (text)
- `description` (text)
- `dueDate` (timestamp)
- `createdAt` (timestamp)
- `updatedAt` (timestamp)

### `invoiceItems`
- `id` (integer, primary key)
- `invoiceId` (foreign key → invoices)
- `description` (text)
- `quantity` (real)
- `unitPrice` (real)
- `total` (real)

### `payments`
- `id` (integer, primary key)
- `invoiceId` (foreign key → invoices)
- `method` (enum: card, bank_transfer, paypal)
- `amount` (real)
- `status` (enum: pending, completed, failed)
- `transactionId` (text)
- `createdAt` (timestamp)

## Key Configuration Files

### `drizzle.config.ts`
Configuration for Drizzle Kit to generate migrations and push schema.

### `src/db/schema.ts`
All table definitions and relationships.

### `src/db/index.ts`
Database connection instance (use this in your code).

## How to Define New Tables

1. Add your table definition in `src/db/schema.ts`:

```typescript
export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content'),
  authorId: integer('author_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  createdAt: integer('created_at', { mode: 'timestamp_ms' })
    .default(sql`(cast(unixepoch('now') * 1000 as integer))`),
});
```

2. Generate migrations:

```bash
npm run db:generate
```

3. Push to database:

```bash
npm run db:push
```

## Resources

- [Drizzle ORM Docs](https://orm.drizzle.team)
- [Turso Documentation](https://docs.turso.tech)
- [LibSQL Client Docs](https://github.com/libsql/libsql-client-ts)

## Troubleshooting

### Connection Issues
- Verify your `TURSO_CONNECTION_URL` and `TURSO_AUTH_TOKEN` are correct
- Check that your `.env.local` file exists and is not in `.gitignore`

### Migration Errors
- Ensure all table names and column definitions follow the schema
- Check that foreign key references point to existing tables

### Still Having Issues?
Check the Turso and Drizzle documentation or review the `.env.example` file for setup requirements.
