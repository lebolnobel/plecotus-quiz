declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_SUPABASE_DATABASE_URL: string;
      VITE_SUPABASE_ANON_KEY: string;
    }
  }
}

export {};
