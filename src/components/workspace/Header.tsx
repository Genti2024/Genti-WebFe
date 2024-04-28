import OptionSvg from "@/components/svg/OptionSvg";
import HamburgerBar from "../svg/HamburgerBar";

const MainHeader = () => {
    return (
        <div>
            <HamburgerBar className="z-30 mt-14 mb-4" />
            <div className="w-full flex items-end">
                <h1>
                    <p className="text-[1.25rem]">안녕하세요.</p>
                    <p className="text-[1.5rem]">
                        <span className="font-bold">김젠티</span>
                        <span> 크리에이터님</span>
                    </p>
                </h1>
                <div className="flex-grow"></div>
                <OptionSvg className="w-4 h-4" />
            </div>
        </div>
    );
};

export default MainHeader;
