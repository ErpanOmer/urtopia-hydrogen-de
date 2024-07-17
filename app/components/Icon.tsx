import { Image } from '@shopify/hydrogen';
import type { HydrogenImageProps } from '@shopify/hydrogen-react/Image'

// 图标尺寸变化
const srcSetOptions = {
    intervals: 0,
    startingWidth: 50,
    incrementSize: 50,
    placeholderWidth: 0
}

interface IconProps extends HydrogenImageProps{
    isNative?: boolean,
    key?: string,
    width?: number | string,
    height?: number | string
}

export default function ({
    isNative = false,
    width = 50,
    height = 'auto',
    ...props
}: IconProps): React.ReactNode {

    if (isNative) {
        return <img {...props} />
    }

    return (
        <Image
            srcSetOptions={srcSetOptions}
            width={width}
            height={height}
            {...props}
        />
    )
}