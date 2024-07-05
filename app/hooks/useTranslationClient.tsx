import { I18nContext } from "react-i18next";
import { useContext } from "react";
import { useRouteLoaderData } from "@remix-run/react";
import { useTranslation } from 'react-i18next';

export default function useTranslationClient (...args: any) {
    const { translation, selectedLocale } = useRouteLoaderData<any>('root');
    const { i18n } = useContext(I18nContext)
    const language = selectedLocale.language.toLowerCase()

    for (const ns in translation) {
        i18n.addResources(language, ns, translation[ns])
    }

    return useTranslation(...args)
}