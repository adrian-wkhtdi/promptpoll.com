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
          created_at: string
          created_by: string | null
          id: string
          original_author: string | null
          original_author_url: string | null
          prompt: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          original_author?: string | null
          original_author_url?: string | null
          prompt: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          original_author?: string | null
          original_author_url?: string | null
          prompt?: string
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
