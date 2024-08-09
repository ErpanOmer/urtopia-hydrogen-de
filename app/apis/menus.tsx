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


const SHOP = `#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }` as const;



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


export async function queryHeader (storefront: Storefront) {
  
  const HEADER_QUERY= `#graphql
      query Header(
        $country: CountryCode
        $language: LanguageCode
      ) @inContext(language: $language, country: $country) {
        shopInfo: shop {
          ...Shop
        }
        menu(handle: "4-0-main-menu") {
          ...Menu
        }
      }
      ${SHOP}
      ${MENU_FRAGMENT}`

      return storefront.query(HEADER_QUERY, { cache: storefront.CacheLong() })
}