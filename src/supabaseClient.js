import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://tkifwuvpkryiodfpaywc.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODUzNDc4NSwiZXhwIjoxOTQ0MTEwNzg1fQ.VpGds6YON1GULaZyRnL1jD3PQp3ulLuhZ2Ac3jxXEBE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
