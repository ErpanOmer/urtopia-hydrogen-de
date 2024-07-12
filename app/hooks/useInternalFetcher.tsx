import { useFetcher, type FetcherWithComponents } from "@remix-run/react";
import { useCallback } from "react";

export default function useInternalFetcher() {
    const fetcher = useFetcher()

    const request = useCallback((path: string, data: any = {}, options: object = {}) => {
        fetcher.submit(data, {
            action: `/api/${path}`,
            ...options,
        })
    }, [fetcher])


    return [request, fetcher] as const
}