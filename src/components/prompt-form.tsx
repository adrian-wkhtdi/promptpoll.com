"use client"

import { supabase } from "@/utils/supabase-client"

export default function PromptForm() {
  async function submit(e: React.FormEvent) {
    e.preventDefault()

    const target = e.target as HTMLFormElement
    const promptElement = target.elements.namedItem('prompt') as HTMLInputElement

    const { data, error } = await supabase
      .from('prompts')
      .insert({ prompt: promptElement.value })

    console.log(data, error)
  }

  return (
    <form onSubmit={submit}>
      <textarea name="prompt"></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}