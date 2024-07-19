import { Await, useRouteLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import Link from "~/components/Link";

export default function CopyRight() {
    const { header, footer } = useRouteLoaderData<any>('root');
    const year = new Date().getFullYear()

    return (
        <div className="flex flex-wrap-reverse justify-center items-center mt-4 gap-3 sm:mt-0 sm:ml-4">
            <Link to="/" className="w-full sm:w-auto text-center text-sm hover:underline underline-offset-4 opacity-60 hover:opacity-90">
                <strong>{header.shop.name}  © Copyright – {year}  </strong>
            </Link>
            <div className="bg-white h-4 w-0.5 opacity-60 hidden sm:block"></div>
            <Suspense>
                <Await resolve={footer}>
                    {resolve => resolve.footer.items.map((item: any) => <Link className="text-sm hover:underline underline-offset-4 opacity-60 hover:opacity-90" key={item.url} to={item.url}>{item.title}</Link>)}
                </Await>
            </Suspense>
        </div>
    )
}