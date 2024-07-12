import { useRouteLoaderData, useSubmit, Form, useFetcher } from '@remix-run/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { locales } from "~/language"
import { __INTERNAL_CHANGE_LANGUAGE } from '~/apis/internal';
import useInternalFetcher from '~/hooks/useInternalFetcher';
import Select from '~/components/Select';

export default function LangSelector() {
    const [options] = useState(() => {

        const options = []

        for (const local in locales) {
            if (Object.prototype.hasOwnProperty.call(locales, local)) {
                options.push({
                    value: locales[local].language.toLowerCase(),
                    label: locales[local].label
                })
            }
        }

        return options
    })

    const { selectedLocale } = useRouteLoaderData<any>('root');
    const [value, setValue] = useState(selectedLocale.language.toLowerCase())
    const { i18n } = useTranslation()
    const [request, response] = useInternalFetcher()


    const onchange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value)

        // clinet change
        i18n.changeLanguage(event.target.value)

        // server change
        request(__INTERNAL_CHANGE_LANGUAGE, { language: event.target.value })
    }

    return <Select name="language" value={value} onChange={onchange} options={options}/>
}