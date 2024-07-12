import { useTranslation } from 'react-i18next';
import CenteralContent from '~/components/CenteralContent';
import Icon from '~/components/Icon';
import Link from '~/components/Link';

export default function CareIcons() {
    const { t } = useTranslation('common')

    return (
        <section className="bg-neutral-700">
            <CenteralContent className="grid gap-y-6 grid-cols-2 py-6 md:grid-cols-4 md:py-6">
                <Link to="/pages/shipping-and-return" className="flex flex-col md:flex-row items-center justify-center text-center">
                    <Icon className="max-w-9 mr-0 mb-1 md:mb-0 md:mr-2" src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/hp-care-truck-white.png" alt={t('footer.care.care1')} />
                    <h5 className="font-semibold text-sm sm:text-base">{t('footer.care.care1')}</h5>
                    <span className="flex-1 md:hidden"></span>
                </Link>
                <Link to="/pages/shipping-and-return" className="flex flex-col md:flex-row items-center justify-center text-center">
                    <Icon className="max-w-9 mr-0 mb-1 md:mb-0 md:mr-2" src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/hp-care-return-white.png" alt={t('footer.care.care2')} />
                    <h5 className="font-semibold text-sm sm:text-base">{t('footer.care.care2')}</h5>
                    <span className="flex-1 md:hidden"></span>
                </Link>
                <Link to="/pages/warranty" className="flex flex-col md:flex-row items-center justify-center text-center">
                    <Icon className="max-w-9 mr-0 mb-1 md:mb-0 md:mr-2" src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/hp-care-protected-white.png" alt={t('footer.care.care3')} />
                    <h5 className="font-semibold text-sm sm:text-base">{t('footer.care.care3')}</h5>
                    <span className="flex-1 md:hidden"></span>
                </Link>
                <Link to="/pages/care" className="flex flex-col md:flex-row items-center justify-center text-center">
                    <Icon className="max-w-9 mr-0 mb-1 md:mb-0 md:mr-2" src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/hp-care-support-white.png" alt={t('footer.care.care4')} />
                    <h5 className="font-semibold text-sm sm:text-base">{t('footer.care.care4')}</h5>
                    <span className="flex-1 md:hidden"></span>
                </Link>
            </CenteralContent>
        </section>
    )
}