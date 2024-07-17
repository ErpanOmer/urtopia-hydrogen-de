import { type Storefront } from "@shopify/hydrogen";

const MENU_FRAGMENT = `#graphql
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  fragment ChildMenuItem on MenuItem {
    ...MenuItem
  }
  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }
  fragment Menu on Menu {
    id
    title
    handle
    items {
      ...ParentMenuItem
    }
  }
` as const;



export async function queryFooterMenus(storefront: Storefront) {
  const handles = ['4-0-explore', '4-0-customer-service', '4-0-about', 'footer',]

  const FOOTER_QUERY = `#graphql
        query Footer(
            $country: CountryCode
            $language: LanguageCode
        ) @inContext(language: $language, country: $country) {
            ${handles.map(handle => `${handle.replace(/[-\d]/g, '')}: menu(handle: "${handle}") {
                ...Menu
            }`).join(' \n')}
        }
        ${MENU_FRAGMENT}
        `

  return storefront.query(FOOTER_QUERY, { cache: storefront.CacheLong() })
}