import i18n from 'i18n';
import path from 'path';
import { fileURLToPath } from 'url';
// Definir __dirname manualmente en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
i18n.configure({
    locales: ['en', 'es'],
    directory: path.join(__dirname, '../locales'), // ✅ Ahora __dirname está definido
    defaultLocale: 'en',
    queryParameter: 'lang',
    autoReload: true,
    updateFiles: false,
    objectNotation: true
});
export default i18n;
