import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ssmqxtbgghewocbmghqk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzbXF4dGJnZ2hld29jYm1naHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4Mjc3MjEsImV4cCI6MjA2NjQwMzcyMX0.WrlO0cuSIjw1R5jZqUR4K5OG05iAIi03Eai6E9OT6mQ';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
