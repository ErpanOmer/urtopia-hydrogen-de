import type { LoaderFunctionArgs } from '@remix-run/server-runtime';

export const CREATE_CUSTOMER = 'createCustomer';

export async function createCustomer(args: LoaderFunctionArgs) {
    const body = await args.request.formData();

    const mutation = `#graphql
        mutation {
            customerCreate(input: {
                email: "${body.get('email')}",
                emailMarketingConsent: {
                    marketingState: SUBSCRIBED
                },
                tags: ["newsletter"]
            }) {
                customer {
                    email
                }
            }
    }`;

    try {
        const {data, errors, extensions} = await args.context.admin.request(mutation);

        if (errors) {
            console.error('createCustomer error', errors?.message)

            return errors
        }

        return data?.customerCreate;

    } catch (error) {
        console.error('createCustomer error', error)

        return null;
    }
}
