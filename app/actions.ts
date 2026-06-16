// app/actions.ts
'use server';

import { query, initDb } from '@/lib/db';
import { cookies } from 'next/headers';

// Securely submit a consumer or retail order
export async function createOrder(formData: {
  name: string;
  address: string;
  phone: string;
  email: string;
  eagleQty: number;
  rhinoQty: number;
}) {
  await initDb(); // Safeguard to ensure table exists

  const insertQuery = `
    INSERT INTO lagenio_orders (name, address, phone, email, eagle_qty, rhino_qty)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id;
  `;

  try {
    const result = await query(insertQuery, [
      formData.name,
      formData.address,
      formData.phone,
      formData.email,
      formData.eagleQty,
      formData.rhinoQty,
    ]);
    return { success: true, orderId: result.rows[0].id };
  } catch (error) {
    console.error("Database order insertion error:", error);
    return { success: false, error: "Could not save order. Please try again." };
  }
}

// Server-side admin verification using cookies
export async function verifyAdminLogin(password: string) {
  if (password === process.env.ADMIN_PASSWORD) {
    // Set a lightweight session cookie valid for 1 day
    cookies().set('admin_session', 'true', { maxAge: 60 * 60 * 24, httpOnly: true });
    return { success: true };
  }
  return { success: false, error: "Incorrect password." };
}

// Retrieve orders securely if authenticated
export async function getOrders() {
  const session = cookies().get('admin_session');
  if (!session || session.value !== 'true') {
    throw new Error("Unauthorized access.");
  }

  await initDb();
  try {
    const result = await query('SELECT * FROM lagenio_orders ORDER BY created_at DESC');
    return result.rows;
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return [];
  }
}