import OptionSvg from "@/components/svg/OptionSvg";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
    const navigate = useNavigate();

    return (
        <div>
            <SideBar className="mt-14 mb-6" />
            <div className="w-full flex items-end">
                <h1>
                    <p className="text-[1.25rem]">안녕하세요.</p>
                    <p className="text-[1.5rem]">
                        <span className="font-bold">김젠티</span>
                        <span> 크리에이터님</span>
                    </p>
                </h1>
                <div className="flex-grow"></div>
                <OptionSvg className="w-4 h-4 cursor-pointer" onClick={() => navigate("/setting")} />
            </div>
        </div>
    );
};

export default MainHeader;
