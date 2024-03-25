/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly EMAILJS_PUBLIC_KEY: string,
    readonly EMAILJS_SERVICE_ID: string,
    readonly EMAILJS_PRIVATE_KEY: string,
    readonly EMAILJS_TEMPLATE_ID: string,
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}