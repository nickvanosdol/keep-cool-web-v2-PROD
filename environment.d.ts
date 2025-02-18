declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BEEHIIV_API_TOKEN: string
      BEEHIIV_PUB_ID: string
    }
  }
}

export {}
