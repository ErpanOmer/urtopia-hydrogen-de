export const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent) || "ontouchstart" in globalThis || !!navigator.maxTouchPoints

export const isDesktop = !isMobile