import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zlbiezqiicgtcejdbdpm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsYmllenFpaWNndGNlamRiZHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwNzgyMzMsImV4cCI6MjEwNTY1NDIzM30.ZQgG4N5dqs0aoQV0m7Nk9_mwgdA6qc4Uo9-g5eprA0Y';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);