export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      prompts: {
        Row: {
          author: string | null
          author_url: string | null
          content: string
          created_at: string
          description: string | null
          id: string
          submitted_by: string
          tags: string[]
          title: string | null
          votes: number
        }
        Insert: {
          author?: string | null
          author_url?: string | null
          content: string
          created_at?: string
          description?: string | null
          id?: string
          submitted_by: string
          tags?: string[]
          title?: string | null
          votes?: number
        }
        Update: {
          author?: string | null
          author_url?: string | null
          content?: string
          created_at?: string
          description?: string | null
          id?: string
          submitted_by?: string
          tags?: string[]
          title?: string | null
          votes?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
