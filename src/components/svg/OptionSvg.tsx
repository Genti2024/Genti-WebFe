import { SVGProps } from "@/types/svgprops";

const OptionSvg = ({ onClick }: SVGProps) => {
    return (
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.431 10.9436C24.94 9.53737 24.1916 8.25199 23.2421 7.14393C22.9822 6.84061 22.554 6.77116 22.1652 6.86282C21.8043 6.9479 21.4299 6.97696 21.0561 6.94621C20 6.8628 18.9333 6.16654 18.2166 5.08327C18.0677 4.80512 17.9568 4.50885 17.886 4.203C17.7958 3.81337 17.5435 3.45967 17.1558 3.36155C16.2227 3.12545 15.2456 3 14.2393 3C13.2329 3 12.2559 3.12543 11.323 3.3615C10.9352 3.45961 10.6828 3.81333 10.5927 4.20297C10.3783 5.12951 9.79496 5.96819 8.90637 6.48122C8.08982 6.95266 7.16399 7.06337 6.31341 6.8628C5.92461 6.77112 5.49631 6.84056 5.23639 7.14389C4.28693 8.25196 3.53848 9.53735 3.04757 10.9435C2.89912 11.3688 3.1149 11.8193 3.46251 12.1057C4.25394 12.7578 4.75852 13.7454 4.75852 14.851C4.75852 15.9565 4.25394 16.9441 3.46251 17.5962C3.1149 17.8826 2.89912 18.3331 3.04757 18.7584C3.53842 20.1644 4.28676 21.4497 5.23608 22.5577C5.49601 22.861 5.92436 22.9305 6.31319 22.8388C6.71544 22.7439 7.13453 22.7186 7.55093 22.7682C8.90637 22.9296 9.75642 23.6018 10.3088 24.7086C10.4344 24.9603 10.5296 25.2258 10.5928 25.4989C10.6829 25.8885 10.9353 26.2423 11.323 26.3404C12.256 26.5765 13.233 26.7019 14.2393 26.7019C15.2456 26.7019 16.2226 26.5765 17.1556 26.3404C17.5433 26.2423 17.7957 25.8885 17.8859 25.4988C18.1002 24.5722 18.6836 23.7334 19.5723 23.2203C20.3889 22.7488 21.3147 22.6381 22.1654 22.8387C22.5542 22.9304 22.9825 22.861 23.2425 22.5576C24.1918 21.4497 24.9401 20.1644 25.431 18.7584C25.5794 18.3331 25.3636 17.8826 25.016 17.5962C24.2246 16.9441 23.72 15.9565 23.72 14.851C23.72 13.7454 24.2246 12.7578 25.016 12.1057C25.3636 11.8193 25.5794 11.3688 25.431 10.9436ZM14.2385 18.4068C12.2749 18.4068 10.6831 16.815 10.6831 14.8513C10.6831 12.8877 12.2749 11.2959 14.2385 11.2959C16.2021 11.2959 17.7939 12.8877 17.7939 14.8513C17.7939 16.815 16.2021 18.4068 14.2385 18.4068Z"
                fill="#B6B6B6"
            />
        </svg>
    );
};

export default OptionSvg;