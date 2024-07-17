import { Await } from '@remix-run/react';
import { Suspense, useEffect, useState } from 'react';
import Icon from '~/components/Icon'

const images = import.meta.glob('./icons/*.svg', { query: '?url', import: 'default' })

export default function () {
    const [promises] = useState(Promise.all(Object.values(images).map(m => m())))

    return (
        <div className="flex flex-wrap gap-2.5 items-center justify-center mt-6 md:justify-end">
            <Suspense>
                <Await resolve={promises}>
                    {
                        resolve => resolve.map((src: any) => <Icon key={src} className='h-6' isNative src={src}/>)
                    }
                </Await>
            </Suspense>
        </div>
    )
}