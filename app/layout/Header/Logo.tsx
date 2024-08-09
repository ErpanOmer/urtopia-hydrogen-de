import { useRouteLoaderData } from "@remix-run/react"
import Image from "~/components/Image";
import Link from "~/components/Link";

export default function Logo () {
    const { shopInfo } = useRouteLoaderData<any>('root');

    return <Link to="/"><Image src={shopInfo.brand.logo.image.url} width={140} alt={shopInfo.name} className="max-w-28 sm:max-w-none"/></Link>
}