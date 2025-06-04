import { createClient } from '@supabase/supabase-js'
import { supabaseURL, anonKey } from '../constants/supabase'

export const supabase = createClient(supabaseURL, anonKey)
