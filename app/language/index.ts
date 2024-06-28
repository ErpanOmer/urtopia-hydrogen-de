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