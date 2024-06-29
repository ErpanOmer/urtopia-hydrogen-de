import { Suspense } from 'react';
import { Await } from '@remix-run/react';
import CenteralContent from '~/components/CenteralContent';
import CareIcons from './CareIcons'

export default function Footer() {
    return (
        <footer className="pb-8">
            <CareIcons/>
        </footer>
    )
}