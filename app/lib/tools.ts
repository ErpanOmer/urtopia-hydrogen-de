export const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent) || "ontouchstart" in globalThis || !!navigator.maxTouchPoints

export const isDesktop = !isMobile

export const isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

export const isNull = (v: any) => v === null

export const isString =  (v: any) => typeof v === 'string';