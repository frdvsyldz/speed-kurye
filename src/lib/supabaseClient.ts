import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qtvxwuaocmukqhduxfhw.supabase.co"; 
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0dnh3dWFvY211a3FoZHV4Zmh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1ODMxMzUsImV4cCI6MjA2NjE1OTEzNX0.JGEfgCFwvFTZzBwfK8eQ3a_PTlOejb8a1EMYFKQYZBA";             
export const supabase = createClient(supabaseUrl, supabaseAnonKey);