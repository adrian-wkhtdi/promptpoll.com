import type { Database } from "@/supabase"

import { useEffect, useState } from "react"
import { supabase } from "@/utils/supabase-client"

export type Prompt = Database['public']['Tables']['prompts']['Row']

export default function PromptList({ reload, callback }: { reload: boolean, callback: () => void }) {
  const [promptList, setPromptList] = useState<Prompt[] | null>(null)

  useEffect(() => {
    if (reload || (!reload && promptList === null)) {
      supabase.from('prompts').select('*').order('created_at', { ascending: false })
        .then(({ data }) => data || [])
        .then(setPromptList)
        .then(callback)
    }
  }, [reload])

  return (
    <div className="flex flex-col items-center justify-between">
      {promptList === null ? <div>Loading...</div> : (
        <ul className="flex flex-col items-center justify-between">
          {promptList.map(prompt => (
            <li key={prompt.id} className="flex flex-col items-center justify-between">
              {prompt.title && <h2 className="text-2xl font-bold">{prompt.title}</h2>}
              <p className="text-xl">{prompt.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}