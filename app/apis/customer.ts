import type { LoaderFunctionArgs } from '@remix-run/server-runtime';

export const CREATE_CUSTOMER = 'createCustomer';

export async function createCustomer(args: LoaderFunctionArgs) {
    const body = await args.request.formData();

    const mutation = `#graphql
        mutation {
            customerCreate(input: {
                email: "${body.get('email')}",
                password: "123632",
                acceptsMarketing: true,
            }) {
                customer {
                    email
                }
            }
    }`;

    try {
        const { errors, customerCreate } = await args.context.storefront.mutate(mutation);

        if (errors) {

            for (const error of errors) {
                console.error('createCustomer error', error?.message)   
            }

            return errors
        }

        return customerCreate;
        
    } catch (error) {
        console.error('createCustomer error', error)

        return null;
    }
}
