import {
    createContext,
    ReactNode,
    useContext,
    useState,
    useRef,
    useEffect,
} from 'react';
import clsx from 'clsx';

interface AsideContextType {
    show: (type: string) => void;
    hide: (type: string) => void;
    visible: Boolean;
    asideType: String
}

type AsideType = 'search' | 'cart' | 'mobile';
type directionType = 'left' | 'right'

type AsideProps = {
    children: ReactNode;
    type: AsideType;
    direction?: directionType;
    header?: ReactNode;
    footer?: ReactNode;
};

const AsideContext = createContext<AsideContextType | undefined>(undefined);

export function AsideProvider({ children }: { children: ReactNode }) {
    const [visible, setIsVisible] = useState(false);
    const [asideType, setAsideType] = useState('')

    const show = (type: string) => {
        setAsideType(type)
        setIsVisible(true);
    };

    const hide = () => {
        console.log('hide');

        setIsVisible(false);
    };

    return (
        <AsideContext.Provider
            value={{
                visible,
                show,
                hide,
                asideType
            }}
        >
            {children}
        </AsideContext.Provider>
    );
}

export function useAside() {
    const context = useContext(AsideContext);

    if (!context) {
        throw new Error('useAside must be used within an AsideProvider');
    }

    return context;
}

export default function Aside({ children, header, footer, type, direction = 'right' }: AsideProps) {
    const { visible, hide, asideType } = useAside();
    const asideRef = useRef<HTMLDivElement>(null);

    const onClick = (e: any) => {
        if (visible && asideRef.current === e.target) {
            hide(type);
        }
    };

    useEffect(() => {
        document.body.style.overflow = visible ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [visible]);

    return (
        <div
            ref={asideRef}
            className={clsx('aside-layer', visible && asideType === type ? 'aside-visible' : '')}
            onClick={onClick}
        >
            <aside className={clsx('bg-white h-screen max-h-screen max-w-[88vw] sm:max-w-md flex flex-col relative', direction === 'right' ? 'ml-auto translate-x-full' : 'mr-auto -translate-x-full')}>
                <svg
                    onClick={() => hide(type)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-8 cursor-pointer absolute right-4 top-4"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                    />
                </svg>

                <header className="flex items-center pl-6 text-2xl h-16">{header}</header>
                <main>{children}</main>
                <footer>{footer}</footer>
            </aside>
        </div>
    );
}
