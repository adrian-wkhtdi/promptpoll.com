import type { Database } from "@/supabase"

import { useEffect, useState } from "react"
import { supabase } from "@/utils/supabase-client"
import Prompt from "@/components/prompt"

export type Prompt = Database['public']['Tables']['prompts']['Row']

export default function PromptList({ reload, callback }: { reload: boolean, callback: () => void }) {
  const [promptList, setPromptList] = useState<Prompt[] | null>(null)

  useEffect(() => {
    if (reload || (!reload && promptList === null)) {
      supabase.from('prompts').select('*').order('votes', { ascending: false })
        .then(({ data }) => data || [])
        .then(setPromptList)
        .then(callback)
    }
  }, [reload])

  return (
    <>
      {promptList === null ? <div>Loading...</div> : (
        <div className="flex flex-col gap-8 w-full max-w-prose">
          {promptList.map(prompt => (
            <Prompt key={prompt.id} prompt={prompt} />
          ))}
        </div>
      )}
    </>
  )
}