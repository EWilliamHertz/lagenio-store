// lib/db.ts
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function query(text: string, params?: any[]) {
  return pool.query(text, params);
}

// Automatically create the table if it's missing
export async function initDb() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS lagenio_orders (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address TEXT NOT NULL,
      phone VARCHAR(50) NOT NULL,
      email VARCHAR(255) NOT NULL,
      eagle_qty INT DEFAULT 0,
      rhino_qty INT DEFAULT 0,
      status VARCHAR(50) DEFAULT 'Pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await query(createTableQuery);
  } catch (error) {
    console.error("Failed to initialize database table:", error);
  }
}