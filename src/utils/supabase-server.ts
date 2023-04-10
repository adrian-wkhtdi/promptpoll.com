import type { Database } from "@/supabase"

import { createClient as supabaseCreateClient } from "@supabase/supabase-js"
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { headers, cookies } from "next/headers"

export const createClient = () => createServerComponentSupabaseClient<Database>({
  headers,
  cookies,
})

export const createAdminClient = () => supabaseCreateClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)