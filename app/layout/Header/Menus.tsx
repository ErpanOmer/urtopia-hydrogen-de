import {useRouteLoaderData} from '@remix-run/react';
import NavLink from '~/components/NavLink';
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import clsx from 'clsx';

export default function Menus() {
  const {menu} = useRouteLoaderData<any>('root');

  const className = 'text-sm text-gray-600 hover:text-gray-800 whitespace-nowrap';

  return (
    <div className="hidden md:flex space-x-3 lg:space-x-6 items-center">
      {menu.items.map((item: any) => {
        return item.items.length ? (
          <Menu key={item.id}>
            <MenuButton className={clsx(className, 'flex group')}>
              {item.title}{' '}
              <ChevronDownIcon className="w-5 group-data-[active]:rotate-180 transition duration-300 ease-out" />
            </MenuButton>
            <MenuItems
              anchor={{
                to: 'bottom start',
                offset: -12,
                gap: 8
              }}
              transition
              className="flex flex-col space-y-1 px-3 py-2 origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 shadow-[0_0_5px_1px_rgba(0,0,0,0.15)] rounded"
            >
              {item.items.map((item: any) => {
                return (
                  <MenuItem key={item.id} as="div">
                    <NavLink className={className} to={item.url}>
                      {item.title}
                    </NavLink>
                  </MenuItem>
                );
              })}
            </MenuItems>
          </Menu>
        ) : (
          <NavLink className={className} key={item.id} to={item.url}>
            {item.title}
          </NavLink>
        );
      })}
    </div>
  );
}
