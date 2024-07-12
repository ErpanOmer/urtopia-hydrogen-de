import type { LoaderFunctionArgs } from "@remix-run/server-runtime"
import { getPrefixPathWithLocale, getLocaleFromRequest } from "~/language"
import { redirectDocument } from "@remix-run/react"
import { instance } from "~/language/i18next"

export const __INTERNAL_CHANGE_LANGUAGE = 'changeLanguage'



export async function changeLanguage(args: LoaderFunctionArgs) {
    const refererUrl = new URL(args.request.headers.get('Referer') as string)
    const url = new URL(args.request.url)
    const language = url.searchParams.get('language') as string


    // 重定型到具体的语言
    const redirectURL = getPrefixPathWithLocale(language, refererUrl.pathname) + refererUrl.search
    await instance.changeLanguage(language)

    // set cookie
    args.context.session.set('selectedLocale', getLocaleFromRequest(refererUrl.origin + redirectURL))

    return redirectDocument(redirectURL, {
        headers: {
            "Set-Cookie": await args.context.session.commit(),
        }
    })
}