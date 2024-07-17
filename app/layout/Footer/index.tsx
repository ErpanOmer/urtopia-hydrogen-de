import CenteralContent from '~/components/CenteralContent';
import CareIcons from './CareIcons'
import LangSelector from './LangSelector';
import CopyRight from './CopyRight';
import LeasingIcons from './LeasingIcons';
import PaymentIcons from './PaymentIcons';
import Menus from './Menus';

export default function Footer() {
    return (
        <footer>
            <CareIcons />
            <CenteralContent className="py-6 sm:py-8">
                <Menus/>
                <LeasingIcons />
                <PaymentIcons />
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 mt-6">
                    <LangSelector />
                    <CopyRight />
                </div>
            </CenteralContent>
        </footer>
    )
}