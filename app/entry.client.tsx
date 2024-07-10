import { hydrateRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import getNextI18n from '~/language/i18next';

startTransition(() => {
  getNextI18n(new Request(window.__remixContext.url)).then(i18n => {
    hydrateRoot(
      document,
      <I18nextProvider i18n={i18n}>
        <StrictMode>
          <RemixBrowser />
        </StrictMode>
      </I18nextProvider>,
    );
  })
});
