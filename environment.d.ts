declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_HOST: string;
      VITE_API_KEY: string;
    }
  }
}

export {};
