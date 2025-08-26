/// <reference types="vite/client" />
// https://vite.dev/guide/env-and-mode

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  /**
   * 网站标题
   */
  readonly VITE_WEB_TITLE: string
}
