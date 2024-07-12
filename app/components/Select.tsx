import { Select, Field } from '@headlessui/react'
import clsx from 'clsx'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

type Option = {
    value: string | number,
    label: string | number
}

type SelectArgs = {
    options: Option[],
    value: Option["value"],
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    name?: string,
    className?: string
}

export default function ({
    options = [],
    value = '',
    onChange = () => { },
    ...props
}: SelectArgs) {


    return (
        <Field className="relative inline-block text-black">
            <Select name={props.name} value={value} onChange={onChange} className={clsx(
                'relative appearance-none rounded-lg border-none py-1.5 pl-3 pr-7',
                'hover:cursor-pointer focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                props.className
            )}>
                {
                    options.map(({ value, label }) => <option key={value} className="hover:cursor-pointer" value={value}>{label}</option>)
                }

            </Select>
            <ChevronDownIcon
                className="group pointer-events-none absolute top-2.5 right-2 size-4"
                aria-hidden="true"
            />
        </Field>
    )
}