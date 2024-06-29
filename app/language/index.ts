export const countries: Record<string, I18nLocale> = {
  default: {
    language: 'DE',
    country: 'DE',
    label: 'Deutsch', // Labels to be shown in the country selector
  },
  'en-de': {
    language: 'EN',
    country: 'DE',
    label: 'English',
  }
};


export function getLocaleFromRequest(request: Request): I18nLocale {

  const url = new URL(request.url);

  return /^\/en($|\/)/.test(url.pathname) ? countries['en-de'] : countries['default']
}


export function getPrefixPathWithLocale(language: string = '', to: string | any = ''): string | any {
  language = language.toLowerCase()

  if (!language || !to) {
    return to
  }

  // 如果不是string
  if (typeof to !== 'string') {
      return to
  }

  // 德语不用处理
  if (language === 'de') {
      return to
  }

  return `${language}${to.startsWith('/') ? to : '/' + to}`
}