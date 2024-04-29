import { SVGProps } from "@/types/svgprops";

const CrossSvg = ({ className, onClick }: SVGProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none" onClick={onClick} className={className}>
            <path
                d="M0.999999 11C0.999999 9.4997 0.999999 7.67625 0.999999 5.99938C0.999999 3.23795 3.23858 1 6 1L21 1C23.7614 1 26 3.23858 26 6L26 21C26 23.7614 23.7614 26 21 26L6 26C3.23858 26 1 23.7614 1 21L1 16"
                stroke="#121212"
                stroke-width="2"
                stroke-linecap="round"
            />
            <path d="M17.0711 17.0711L10 10M10 17.0711L17.0711 10" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

export default CrossSvg;
