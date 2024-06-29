import { Image } from '@shopify/hydrogen';
import type { HydrogenImageProps } from '@shopify/hydrogen-react/Image'

// 图片尺寸变化
const srcSetOptions = {
    intervals: 4,
    startingWidth: 400,
    incrementSize: 400,
    placeholderWidth: 0
}

export default function (props: HydrogenImageProps): React.ReactNode {
    return (
        <Image
            srcSetOptions={srcSetOptions}
            {...props}
        />
    )
}