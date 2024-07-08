import config from './config';
import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';
import { getPathnameFromRequest } from './index';

// locales
const locales = import.meta.glob(`./locales/*/*.js`, { eager: true, import: 'default' })

export const pathToNameSpace: Record<string, string> = {
    '': 'homepage',
    '/': 'homepage'
}

export default async function (request: Request, i18n: I18nLocale) {
    const nsFromPathname = pathToNameSpace[getPathnameFromRequest(request)]

    await i18next
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => {
        console.log(language, typeof namespace, namespace)

        if (!language || !namespace || namespace === 'undefined') {
            return null
        }

        return locales[`./locales/${language}/${namespace}.js`]
    }))
    .init({
        ...config,
        lng: i18n.language.toLowerCase(),
        ns: [...config.ns, nsFromPathname]
    });

    return i18next
}