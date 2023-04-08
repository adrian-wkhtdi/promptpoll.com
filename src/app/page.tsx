"use client"

import type { User } from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react"
import { supabase } from "@/utils/supabase-client"
import PromptForm from "@/components/prompt-form"
import Login from "@/components/login"

export default function Home() {
  const [user, setUser] = useState<User | null>()

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  return (
    <main className="flex flex-col items-center justify-between">
      <h1 className="text-4xl font-bold">PromptPoll.com</h1>

      {user ? <PromptForm /> : <Login />}
    </main>
  )
}
