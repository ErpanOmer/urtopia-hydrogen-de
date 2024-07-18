import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/server-runtime"
import { changeLanguage, __INTERNAL_CHANGE_LANGUAGE } from "~/apis/internal"
import { createCustomer, CREATE_CUSTOMER } from "~/apis/customer"

export async function action(args: LoaderFunctionArgs) {
    console.log('api.action', args.params.handle)

    switch (args.params.handle) {
        case CREATE_CUSTOMER:
            return createCustomer(args)
        default:
            return null
    }

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