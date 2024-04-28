import { SVGProps } from "@/types/svgprops";

const DownloadSvg = ({ onClick, className }: SVGProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none" className={className} onClick={onClick}>
            <path
                d="M10.9165 9.49988L8.41651 9.49988C6.20737 9.49988 4.41651 11.2907 4.41651 13.4999L4.41651 19.5832C4.41651 21.7923 6.20736 23.5832 8.4165 23.5832L22.0832 23.5832C24.2923 23.5832 26.0832 21.7924 26.0832 19.5832L26.0832 13.4999C26.0832 11.2907 24.2923 9.49988 22.0832 9.49988L19.5832 9.49988"
                stroke="#121212"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M11.9998 14.9169L14.5427 17.4598C14.9333 17.8503 15.5664 17.8503 15.9569 17.4598L18.4998 14.9169"
                stroke="#121212"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path d="M15.2498 17.0835L15.2498 4.0835" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
};

export default DownloadSvg;
