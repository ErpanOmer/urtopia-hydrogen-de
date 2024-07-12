import CenteralContent from '~/components/CenteralContent';
import CareIcons from './CareIcons'
import LangSelector from './LangSelector';
import CopyRight from './CopyRight';
import LeasingIcons from './LeasingIcons';

export default function Footer() {
    return (
        <footer>
            <CareIcons />
            <CenteralContent>
                <LeasingIcons />
            </CenteralContent>
            <CenteralContent className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 py-6 sm:py-8">
                <LangSelector />
                <CopyRight />
            </CenteralContent>
        </footer>
    )
}