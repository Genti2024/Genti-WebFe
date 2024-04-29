import { useState } from "react";
import HamburgerBar from "../svg/HamburgerBar";
import CrossSvg from "../svg/CrossSvg";
import { useNavigate } from "react-router-dom";

interface SideBarProps {
    className?: string;
}

const SideBar = ({ className }: SideBarProps) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleNavigate = (path: string) => () => {
        navigate(path);
        setIsSideBarOpen(false);
    };

    return (
        <>
            <div className={className}>
                <HamburgerBar onClick={() => setIsSideBarOpen(true)} className="h-10 cursor-pointer" />
            </div>
            <div
                className={`fixed top-8 left-0 pl-8 pr-12 py-8 h-full z-50 transform transition-transform duration-300 bg-green3 shadow-2xl rounded-r-2xl flex flex-col items-start gap-4 text-[1.25rem] font-bold ${
                    isSideBarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <CrossSvg onClick={() => setIsSideBarOpen(false)} className="h-10 cursor-pointer" />
                <button onClick={handleNavigate("/")}>작업실</button>
                <button onClick={handleNavigate("/settle")}>정산하기</button>
                <button onClick={handleNavigate("/mypage")}>마이 페이지</button>
            </div>
        </>
    );
};

export default SideBar;
