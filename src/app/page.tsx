"use client"

import type { User } from "@supabase/auth-helpers-nextjs"

import { useEffect, useState } from "react"
import { supabase } from "@/utils/supabase-client"
import PromptForm from "@/components/prompt-form"
import Login from "@/components/login"
import PromptList from "@/components/prompt-list"

export default function Home() {
  const [reload, setReload] = useState<boolean>(false)
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
  }, [])

  return (
    <main className="flex flex-col items-center justify-between">
      <h1 className="text-4xl font-bold">PromptPoll.com</h1>

      {user ? <PromptForm callback={() => setReload(true)} /> : <Login />}

      <PromptList reload={reload} callback={() => setReload(false)} />
    </main>
  )
}
