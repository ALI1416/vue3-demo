/// <reference types="vite/client" />
// https://vite.dev/guide/env-and-mode

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  /**
   * APP标题
   */
  readonly VITE_APP_TITLE: string
  /**
   * API URL
   */
  readonly VITE_API_URL: string
}
