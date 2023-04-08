"use client"

import { supabase } from "@/utils/supabase-client"

export default function Login() {
  async function login() {
    const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'twitter' })
    console.log(data, error)
  }

  return <button onClick={login}>Login with twitter</button>
}