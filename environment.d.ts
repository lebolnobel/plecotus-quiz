declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOST: string;
      API_KEY: string;
    }
  }
}

export {};
