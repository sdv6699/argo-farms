import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://xpbnzfstbxyytrvymfdc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwYm56ZnN0Ynh5eXRydnltZmRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1NTkzMDcsImV4cCI6MjA2MDEzNTMwN30.NovBf_-Gj14aLLJq5NAs4t6YK0izR_IsC8hRGp4vyNU"
);

export default supabase;
