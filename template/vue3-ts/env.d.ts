/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  /**
   * 网站标题
   */
  readonly VITE_WEB_TITLE: string
}
