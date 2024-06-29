import { Image } from '@shopify/hydrogen';
import type { HydrogenImageProps } from '@shopify/hydrogen-react/Image'

// 图标尺寸变化
const srcSetOptions = {
    intervals: 0,
    startingWidth: 50,
    incrementSize: 50,
    placeholderWidth: 0
}

export default function (props: HydrogenImageProps): React.ReactNode {
    return (
        <Image
            srcSetOptions={srcSetOptions}
            width={50}
            {...props}
        />
    )
}