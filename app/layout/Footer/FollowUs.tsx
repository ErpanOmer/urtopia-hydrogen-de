import Link from '~/components/Link';
import {useFetcher} from '@remix-run/react';
import {ChevronRightIcon, CheckCircleIcon} from '@heroicons/react/24/solid';
import clsx from 'clsx';
import {useEffect, useState} from 'react';
import {isString, isNull} from '~/lib/tools';
import useBreakPoint from '~/hooks/useBreakPoint';
import { useTranslation } from 'react-i18next';

export default function FollowUs() {
  const point = useBreakPoint();
  const {Form, data} = useFetcher<any>();
  const [hide, setHide] = useState<boolean>(true);
  const [text, setText] = useState<string>('Thanks for subscribing !');
  const { t } = useTranslation()

  useEffect(() => {
    if (isNull(data?.customer)) {
      setText(t('footer.Newsletter.already'));
      setHide(false);
    }

    if (isString(data?.customer?.email)) {
      setText(t('footer.Newsletter.thank'));
      setHide(false);
    }

    
  }, [data]);

  useEffect(() => {
    if (!hide) {
      setTimeout(setHide, 15000, true);
    }
  }, [hide]);

  return (
    <div className="space-y-2 sm:space-y-4 max-w-80 order-first sm:order-last mb-3 sm:mb-0">
      <h4 className="text-xl">{ t('footer.Newsletter.title')}</h4>
      <p className="text-sm md:text-base">
        <span>
        { t('footer.Newsletter.join')}
        </span>
      </p>
      <Form method="post" action="/api/createCustomer" autoComplete="off">
        <input type="hidden" name="form_type" value="customer" />
        <input type="hidden" name="utf8" value="✓" />
        <input type="hidden" name="tags" value="newsletter" />
        <div className="relative pb-8 md:pb-12">
          <input
            type="email"
            className={clsx(
              'block w-full rounded-lg border-none bg-white/5 py-3 pl-3 pr-7 text-base/6 text-white autofill:bg-black',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
            )}
            name="email"
            placeholder="Email"
            required
          />
          <button
            type="submit"
            className="absolute top-3 right-2 size-6 cursor-pointer"
          >
            <ChevronRightIcon />
          </button>
          <div
            className={clsx(
              'flex items-center justify-start absolute text-sm w-full bottom-1 md:bottom-3',
              hide && 'hidden',
            )}
          >
            <CheckCircleIcon className="text-green-600 max-w-6 mr-2" />
            <span className="whitespace-nowrap">{text}</span>
          </div>
        </div>
      </Form>
      <h4 className={clsx('md:text-xl text-base')}>{t('footer.Newsletter.us')}</h4>
      <div className="flex space-x-6 items-center">
        <Link
          className="flex-1 max-w-5"
          target="_blank"
          to="https://twitter.com/newurtopia_us"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            viewBox="0 0 18 15"
          >
            <path
              fill="currentColor"
              d="M17.64 2.6a7.33 7.33 0 01-1.75 1.82c0 .05 0 .13.02.23l.02.23a9.97 9.97 0 01-1.69 5.54c-.57.85-1.24 1.62-2.02 2.28a9.09 9.09 0 01-2.82 1.6 10.23 10.23 0 01-8.9-.98c.34.02.61.04.83.04 1.64 0 3.1-.5 4.38-1.5a3.6 3.6 0 01-3.3-2.45A2.91 2.91 0 004 9.35a3.47 3.47 0 01-2.02-1.21 3.37 3.37 0 01-.8-2.22v-.03c.46.24.98.37 1.58.4a3.45 3.45 0 01-1.54-2.9c0-.61.14-1.2.45-1.79a9.68 9.68 0 003.2 2.6 10 10 0 004.08 1.07 3 3 0 01-.13-.8c0-.97.34-1.8 1.03-2.48A3.45 3.45 0 0112.4.96a3.49 3.49 0 012.54 1.1c.8-.15 1.54-.44 2.23-.85a3.4 3.4 0 01-1.54 1.94c.74-.1 1.4-.28 2.01-.54z"
            ></path>
          </svg>
        </Link>
        <Link
          className="flex-1 max-w-5"
          target="_blank"
          to="https://www.facebook.com/UrtopiaEbike/"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            viewBox="0 0 18 18"
          >
            <path
              fill="currentColor"
              d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2.01-.1-1.01 0-1.83.3-2.45.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98c-.28 0-.5-.1-.7-.28a.94.94 0 01-.28-.7V1.59c0-.27.1-.5.28-.69a.94.94 0 01.7-.28h15.44z"
            ></path>
          </svg>
        </Link>
        <Link
          className="flex-1 max-w-5"
          target="_blank"
          to="https://www.instagram.com/newurtopia/"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            viewBox="0 0 18 18"
          >
            <path
              fill="currentColor"
              d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"
            ></path>
            <path
              fill="currentColor"
              d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"
            ></path>
          </svg>
        </Link>
        <Link
          className="flex-1 max-w-5"
          target="_blank"
          to="https://www.youtube.com/channel/UCsDmgIsvhCZyyPAWvAhKcDQ"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            viewBox="0 0 100 70"
          >
            <path
              d="M98 11c2 7.7 2 24 2 24s0 16.3-2 24a12.5 12.5 0 01-9 9c-7.7 2-39 2-39 2s-31.3 0-39-2a12.5 12.5 0 01-9-9c-2-7.7-2-24-2-24s0-16.3 2-24c1.2-4.4 4.6-7.8 9-9 7.7-2 39-2 39-2s31.3 0 39 2c4.4 1.2 7.8 4.6 9 9zM40 50l26-15-26-15v30z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
