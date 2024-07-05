const langRegexp = /^\/(en|de)($|\/)/
const httpPattern = /^(http|https):\/\/(\S+)$/

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

  return langRegexp.test(url.pathname) ? countries['en-de'] : countries['default']
}

export function getPathnameFromRequest(request: Request): string {
  const url = new URL(request.url)
  
  return url.pathname.replace(langRegexp, '/')
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

  // 如果是http/s 协议开头的
  if (httpPattern.test(to)) {
    return to
  }

  // 清除语言locale
  to = to.replace(langRegexp, '/')

  return (language === 'de' ? '' : '/' + language) + to
}