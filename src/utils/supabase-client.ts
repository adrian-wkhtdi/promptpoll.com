import type { Database } from "@/supabase"

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"

export const supabase = createBrowserSupabaseClient<Database>()