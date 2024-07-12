import clsx from 'clsx';
import { Link as RemixLink, type LinkProps as RemixLinkProps, useMatches, useRouteLoaderData } from "@remix-run/react";
import type { RootLoader } from '~/root';
import { getPrefixPathWithLocale } from '~/language'
import { isMobile } from '~/lib/tools';

interface LinkProps extends RemixLinkProps {
    isLink?: Boolean
}

export default function Link({
    to = "/",
    isLink = false,
    className = '',
    children,
    ...props
}: LinkProps) {
    const root = useRouteLoaderData<RootLoader>('root');

    if (isLink) {
        className = clsx(className, 'color-blue')
    }


    return (
        <RemixLink
            to={getPrefixPathWithLocale(root?.selectedLocale.language, to)}
            className={className}
            prefetch={isMobile ? "viewport" : 'intent'}
            {...props}>
            {children}
        </RemixLink>
    )
}