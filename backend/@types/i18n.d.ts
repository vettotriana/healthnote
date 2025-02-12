declare module 'i18n' {
  import { RequestHandler } from 'express';

  interface I18nConfiguration {
    locales: string[];
    directory: string;
    defaultLocale?: string;
    queryParameter?: string;
    autoReload?: boolean;
    updateFiles?: boolean;
    objectNotation?: boolean;
  }

  interface I18n {
    configure(config: I18nConfiguration): void;
    init: RequestHandler; // Esta línea añade el middleware de inicialización
    __: (phrase: string, ...replace: any[]) => string;
    __n: (phrase: string, count: number) => string;
  }

  const i18n: I18n;
  export default i18n;
}
