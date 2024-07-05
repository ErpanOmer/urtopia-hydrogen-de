import { type LoaderFunctionArgs } from '@shopify/remix-oxygen';
import { getI18n } from 'react-i18next'
import { getPathnameFromRequest } from '~/language';

export default function useTranslationServer({ request, context }: LoaderFunctionArgs) {
    // language
    const language = context.storefront.i18n.language.toLowerCase()
    // const pathname = getPathnameFromRequest(request)
    // console.log('pathname', pathname)

    const i18n = getI18n()

    return {
        ...i18n,
        translation: i18n.getDataByLanguage(language)
    }
}