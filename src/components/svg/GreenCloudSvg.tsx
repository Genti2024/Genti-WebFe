import { SVGProps } from "@/types/svgprops";

const GreenCloudSvg = ({ className }: SVGProps) => {
    return (
        <svg className={"w-full " + className} viewBox="0 0 393 231" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M393 0H0V194.987C28.5353 191.627 60.6712 200.783 95.9781 228.521C101.802 233.097 110.447 229.348 111.675 222.044C113.515 211.104 116.246 200.167 119.909 189.321C157.14 79.1003 276.673 19.9307 386.893 57.1615C388.912 57.8433 390.948 58.5849 393 59.3844V0Z"
                fill="#C7FACE"
            />
        </svg>
    );
};

export default GreenCloudSvg;
