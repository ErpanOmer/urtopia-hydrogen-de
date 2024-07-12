import { useEffect, useState } from 'react';
import Icon from '~/components/Icon'

const images = import.meta.glob('./icons/*.svg', { query: '?url', import: 'default' })

export default function () {
    const [icons, setIcons] = useState<Array<string>>([])

    useEffect(() => {
        const fn = async () => {
            const icons: Array<string> = []

            for (const image in images) {
                icons.push(await images[image]() as string)
            }

            setIcons(icons)
        }

        fn()
    }, [])

    return (
        <div className="flex flex-wrap gap-2.5 items-center justify-center pt-4 md:justify-end sm:pt-8">
            {icons.map(src => <Icon key={src} className='h-6' isNative src={src}/>)}
        </div>
    )
}