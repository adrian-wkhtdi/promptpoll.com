import type { Prompt } from "@/components/prompt-list"
import type { VoteValues } from "@/app/api/vote/route"

import { ThumbsUp, ThumbsDown } from "lucide-react"

export default function Prompt({ prompt }: { prompt: Prompt }) {
  async function vote(value: VoteValues) {
    const res = await fetch('/api/vote', {
      method: 'PATCH',
      body: JSON.stringify({ id: prompt.id, value })
    })

    if (!res.ok) {
      console.error('Error up voting prompt')
    }
  }

  return (
    <div className="flex flex-row items-center">
      <div className="text-xl grow">{prompt.content}</div>

      <div className="grid grid-rows-2 gap-4">
        <button type="button" className="px-4 py-2" onClick={() => vote('up')}>
          <ThumbsUp className="w-6 h-6" />
        </button>
        <button type="button" className="px-4 py-2" onClick={() => vote('down')}>
          <ThumbsDown className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}