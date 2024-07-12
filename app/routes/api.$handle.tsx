import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/server-runtime"
import { __INTERNAL_CHANGE_LANGUAGE } from "~/apis/internal"
import { changeLanguage } from "~/apis/internal"

export async function action({ request }: ActionFunctionArgs) {
    console.log('api.action', (await request.formData()).get('language'))

    return null
}


export function loader(args: LoaderFunctionArgs) {

    switch (args.params.handle) {
        case __INTERNAL_CHANGE_LANGUAGE:
            return changeLanguage(args)
        default:
            return null
    }
}