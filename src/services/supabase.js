import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cdfmyxriwidtibbyowev.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkZm15eHJpd2lkdGliYnlvd2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4MTgxOTEsImV4cCI6MjA0MTM5NDE5MX0.ZCs9fFjNLQezLS2sAyHn4XA278x201UoRNlyQhtN7D4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
