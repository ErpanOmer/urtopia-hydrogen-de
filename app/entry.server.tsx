import isbot from 'isbot';
import { createContentSecurityPolicy } from '@shopify/hydrogen';
import { I18nextProvider } from 'react-i18next';
import { redirect } from '@shopify/remix-oxygen';
import { RemixServer } from '@remix-run/react';
import { renderToReadableStream } from 'react-dom/server';
import type { EntryContext, AppLoadContext } from '@shopify/remix-oxygen';
import { getPrefixPathWithLocale, getPathnameFromRequest } from '~/language';
import getNextI18n from '~/language/i18next';


export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  context: AppLoadContext,
) {
  const selectedLocale = context.session.get('selectedLocale')

  // if not selectedLocale -> set selectedLocale for cookie
  if (!selectedLocale) {
    context.session.set('selectedLocale', context.storefront.i18n);
  } else {
    // 如果session中已存在 selectedLocale, 强制重定向到对应的语言
    if (context.storefront.i18n.language !== selectedLocale.language) {
      return redirect(getPrefixPathWithLocale(selectedLocale.language, getPathnameFromRequest(request)))
    }
  }

  const { nonce, header, NonceProvider } = createContentSecurityPolicy({
    shop: {
      checkoutDomain: context.env.PUBLIC_CHECKOUT_DOMAIN,
      storeDomain: context.env.PUBLIC_STORE_DOMAIN,
    },
  });

  const body = await renderToReadableStream(
    <I18nextProvider i18n={await getNextI18n(request)}>
      <NonceProvider>
        <RemixServer context={remixContext} url={request.url} />
      </NonceProvider>
    </I18nextProvider>,
    {
      nonce,
      signal: request.signal,
      onError(error) {
        // eslint-disable-next-line no-console
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Set-Cookie', await context.session.commit());
  responseHeaders.set('Content-Type', 'text/html');
  responseHeaders.set('Content-Security-Policy', header);

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
