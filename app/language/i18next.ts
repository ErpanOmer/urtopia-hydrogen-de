import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { getLocaleFromRequest, getPathnameFromRequest } from ".";
import resourcesToBackend from 'i18next-resources-to-backend';

export const pathToNameSpace: Record<string, string> = {
    '': 'homepage',
    '/': 'homepage',
    undefined: 'homepage'
}

export const instance = i18next.createInstance();

let ready = false;

export default async function getNextI18n(request: Request) {
    console.time('getNextI18n')

    const locale = getLocaleFromRequest(request)
    const pathname = getPathnameFromRequest(request)
    const lng = locale.language.toLowerCase()

    if (ready) {
        await instance.changeLanguage(lng)
        console.timeEnd('getNextI18n')
        return instance
    }

    const nsFromPathname = pathToNameSpace[pathname]


    instance.on('initialized', () => ready = true)

    if (!import.meta.env.SSR) {
        instance.use(I18nextBrowserLanguageDetector)
    }

    instance.use(resourcesToBackend((language: string, namespace: string) => {
        if (!language || !namespace || namespace === 'undefined') {
            return null
        }

        return import(`../assets/locales/${language}/${namespace}.js`)
    }))


    instance.use(initReactI18next)

    await instance.init({
        fallbackLng: false,
        debug: import.meta.env.DEV,
        ns: ['common', nsFromPathname],
        lng,
        detection: {
            // Here only enable htmlTag detection, we'll detect the language only
            // server-side with remix-i18next, by using the `<html lang>` attribute
            // we can communicate to the client the language detected server-side
            order: ["htmlTag"],
            // Because we only use htmlTag, there's no reason to cache the language
            // on the browser, so we disable it
            caches: [],
        }
    })

    console.timeEnd('getNextI18n')

    return instance
}