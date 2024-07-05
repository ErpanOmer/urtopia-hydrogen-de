import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { hydrateRoot } from 'react-dom/client';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import i18n from '~/language/config'

startTransition(() => {
  i18next.use(initReactI18next).use(I18nextBrowserLanguageDetector).init({
    ...i18n,
    detection: {
      // Here only enable htmlTag detection, we'll detect the language only
      // server-side with remix-i18next, by using the `<html lang>` attribute
      // we can communicate to the client the language detected server-side
      order: ["htmlTag"],
      // Because we only use htmlTag, there's no reason to cache the language
      // on the browser, so we disable it
      caches: [],
    }
  }).then(() => {
    hydrateRoot(
      document,
      <I18nextProvider i18n={i18next}>
        <StrictMode>
          <RemixBrowser />
        </StrictMode>
      </I18nextProvider>,
    );
  })
});
