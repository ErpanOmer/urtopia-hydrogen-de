import { Await, useRouteLoaderData } from '@remix-run/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ClientOnly } from 'remix-utils/client-only';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Suspense } from 'react';
import Link from '~/components/Link';
import useBreakPoint from '~/hooks/useBreakPoint';
import FollowUs from './FollowUs';

export default function Menus() {
  const {footer} = useRouteLoaderData<any>('root');
  const point = useBreakPoint();

  return (
    <Suspense>
      <Await resolve={footer}>
        {(resolve) => (
          <ClientOnly>
            {() => (
              <div className="grid mt-2 mb-8 md:my-8 md:grid-cols-4 sm:grid-cols-2 border-b border-gray-500 pb-8 sm:gap-y-6 gap-y-4">
                {Object.values(resolve)
                  .filter((v: any) => v.handle !== 'footer')
                  .map((value: any) => (
                    <Disclosure
                      as="div"
                      className="group"
                      key={value.handle}
                      defaultOpen={point?.sm}
                    >
                      <DisclosureButton
                        as="h2"
                        className="md:text-xl text-base flex items-center justify-between sm:pointer-events-none cursor-auto"
                      >
                        {value.title}
                        <ChevronDownIcon className="w-5 group-data-[open]:rotate-180 transition duration-300 ease-out sm:hidden" />
                      </DisclosureButton>
                      <DisclosurePanel
                        transition
                        className="flex flex-col text-sm font-medium origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 space-y-3 pt-4 mb-2"
                      >
                        {value.items.map((item: any) => (
                          <Link
                            key={item.url}
                            className="hover:underline underline-offset-4 opacity-70 hover:opacity-90"
                            to={item.url}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                  <FollowUs/>
              </div>
            )}
          </ClientOnly>
        )}
      </Await>
    </Suspense>
  );
}
