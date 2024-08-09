
import { useAside } from "../Aside";


export default function Search() {
  const { show } = useAside()

  return (
    <svg
      onClick={() => show('search')}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 cursor-pointer text-gray-700 hover:text-gray-800 hover:scale-110 transition min-w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}
