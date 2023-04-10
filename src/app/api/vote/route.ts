import { createAdminClient } from "@/utils/supabase-server"
import { NextResponse } from "next/server"

export type VoteValues = 'up' | 'down'

export const revalidate = 0
export const vote_values: { [key in VoteValues]: number } = {
  'up': 1,
  'down': -1,
}

export async function PATCH(request: Request) {
  const { id, value }: { id: string; value: VoteValues } = await request.json()

  if (!id || !Object.keys(vote_values).includes(value)) {
    return NextResponse.json({ data: null, error: 'Missing or invalid input' })
  }

  const supabase = createAdminClient()
  const { data, error } = await supabase.from('prompts').select('votes').eq('id', id).single()

  if (!data || error) {
    return NextResponse.json({ data, error })
  }

  const { error: updateError } = await supabase.from('prompts').update({ votes: data.votes + vote_values[value] }).eq('id', id)

  return NextResponse.json({ data: null, error: updateError })
}
