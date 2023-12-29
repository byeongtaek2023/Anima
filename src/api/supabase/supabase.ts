import { createClient } from '@supabase/supabase-js';

// Supabase 클라이언트를 SupabaseClient 타입으로 선언합니다.
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY as string;
export const supabase = createClient(supabaseUrl, supabaseKey);
