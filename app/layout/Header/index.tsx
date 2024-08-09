import CenteralContent from '~/components/CenteralContent';
import Logo from './Logo';
import Menus from './Menus';
import LangSelector from '../Footer/LangSelector';
import Search from './Search';
import Account from './Account';
import Cart from './Cart';
import {AsideProvider} from '../Aside';
import SearchAside from '../Aside/SearchAside';
import CartAside from '../Aside/CartAside';
import MobileAside from '../Aside/MobileAside';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <AsideProvider>
      <header className="h-12 sm:h-16">
        <CenteralContent className="!px-4 md:!px-8 h-full flex items-center space-x-3 sm:space-x-4 lg:space-x-6 overflow-hidden">
          <MobileMenu/>
          <Logo />
          <span className="flex-1"></span>
          <Menus />
          <LangSelector className="text-sm text-gray-600 hover:text-gray-800 !pl-0 !pr-6" />
          <SearchAside />
          <Search />
          <Account />
          <CartAside />
          <Cart />
          <MobileAside />
        </CenteralContent>
      </header>
    </AsideProvider>
  );
}
