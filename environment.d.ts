declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_SUPABASE_DATABASE_URL: string;
      VITE_API_KEY: string;
    }
  }
}

export {};
