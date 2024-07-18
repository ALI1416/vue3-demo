/// <reference types="vite/client" />
// https://cn.vitejs.dev/guide/env-and-mode.html

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  /**
   * APP标题
   */
  readonly VITE_APP_TITLE: string
}
