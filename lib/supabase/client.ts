"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { ReactNode } from "react";

/**
 * Creates a Supabase client for use in Client Components.
 * This client automatically handles session refresh and real-time subscriptions.
 *
 * @example
 * // In a Client Component
 * "use client";
 * import { createClient } from "@/lib/supabase/client";
 * import { useEffect, useState } from "react";
 *
 * export function UserList() {
 *   const [users, setUsers] = useState([]);
 *   const supabase = createClient();
 *
 *   useEffect(() => {
 *     const fetchUsers = async () => {
 *       const { data } = await supabase.from("users").select();
 *       setUsers(data);
 *     };
 *     fetchUsers();
 *   }, []);
 *
 *   return null;
 * }
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
