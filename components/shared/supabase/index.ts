import { createClient, type SupabaseClient } from "@supabase/supabase-js"

export function createSupabaseClient({
  url,
  anonKey,
}: {
  url: string
  anonKey: string
}): SupabaseClient {
  return createClient(url, anonKey)
}
