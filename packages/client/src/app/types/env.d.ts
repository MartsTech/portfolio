declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_BASE_URL: string;
    NEXT_PUBLIC_SANITY_PROJECT_ID: string;
    NEXT_PUBLIC_SANITY_DATASET: string;
    SANITY_API_PROJECT_ID: string;
    SANITY_API_DATASET: string;
    SANITY_API_WRITE_TOKEN: string;
  }
}
