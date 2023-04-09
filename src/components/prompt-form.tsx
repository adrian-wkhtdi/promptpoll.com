import { supabase } from "@/utils/supabase-client"

export default function PromptForm({ callback }: { callback: () => void }) {
  async function submit(e: React.FormEvent) {
    e.preventDefault()

    const target = e.target as HTMLFormElement
    const promptElement = target.elements.namedItem('prompt') as HTMLInputElement

    const { data, error } = await supabase
      .from('prompts')
      .insert({ content: promptElement.value })

    console.log(data, error)

    callback()
  }

  return (
    <form onSubmit={submit}>
      <textarea name="prompt"></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}