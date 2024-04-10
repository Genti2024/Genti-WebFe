import { SVGProps } from "@/types/svgprops";

const HamburgerBar = ({ className, onClick }: SVGProps) => {
    return (
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={className}>
            <path d="M26 6L3 6" stroke="#121212" stroke-width="3" stroke-linecap="round" />
            <path d="M26 15L3 15" stroke="#121212" stroke-width="3" stroke-linecap="round" />
            <path d="M26 23H3" stroke="#121212" stroke-width="3" stroke-linecap="round" />
        </svg>
    );
};

export default HamburgerBar;
