import { NavLink as RemixLink, useRouteLoaderData, type NavLinkProps } from "@remix-run/react";
import { getPrefixPathWithLocale } from '~/language'
import { isMobile } from '~/lib/tools';

export interface LinkProps extends NavLinkProps {
    ref? : any
}

export default function NavLink({
    to = "/",
    children = null,
    ...props
}: LinkProps) {
    const { selectedLocale } = useRouteLoaderData<any>('root');


    return (
        <RemixLink 
           to={getPrefixPathWithLocale(selectedLocale.language, to)}
           prefetch={isMobile ? "viewport" : 'intent'}
           {...props}>
           {children}
        </RemixLink>
    )
}