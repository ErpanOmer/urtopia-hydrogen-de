import clsx from "clsx"

interface CenteralContentProps {
    children?: React.ReactNode,
    className?: string
}

export default function CenteralContent({ 
    className, children, ...props }: CenteralContentProps
) {
    return (
        <section
            className={clsx('mx-auto px-8 max-w-screen-lg box-border sm:box-content', className)}
            {...props}>
            {children}
        </section>
    )
}