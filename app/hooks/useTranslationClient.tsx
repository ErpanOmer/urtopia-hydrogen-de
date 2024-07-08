import { I18nContext } from "react-i18next";
import { useContext } from "react";
import { useRouteLoaderData } from "@remix-run/react";
import { useTranslation } from 'react-i18next';

let ready = false

export default function useTranslationClient (...args: any) {
    const { translation, selectedLocale } = useRouteLoaderData<any>('root');
    const { i18n } = useContext(I18nContext)
    const language = selectedLocale.language.toLowerCase()

    if (!ready) {
        for (const ns in translation) { 
            i18n.addResourceBundle(language, ns, translation[ns])
        }

        ready = true
    }

    return useTranslation(...args)
}