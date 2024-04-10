import GreenCloudSvg from "@/components/svg/GreenCloudSvg";
import HamburgerBar from "@/components/svg/HamburgerBar";
import OptionSvg from "@/components/svg/OptionSvg";
import Exclamation from "@/assets/img/Exclamation.webp";
import Folder from "@/assets/img/Folder.webp";
import ToggleButton from "@/components/common/ToggleButton";
import { useState } from "react";

const test = [
    {
        title: "테스트1",
        content: "테스트1 내용",
    },
    {
        title: "테스트2",
        content: "테스트2 내용",
    },
    {
        title: "테스트3",
        content: "테스트3 내용",
    },
    {
        title: "테스트4",
        content: "테스트4 내용",
    },
    {
        title: "테스트5",
        content: "테스트5 내용",
    },
    {
        title: "테스트6",
        content: "테스트6 내용",
    },
    {
        title: "테스트7",
        content: "테스트7 내용",
    },
    {
        title: "테스트8",
        content: "테스트8 내용",
    },
    {
        title: "테스트9",
        content: "테스트9 내용",
    },
    {
        title: "테스트10",
        content: "테스트10 내용",
    },
];

const MainPage = () => {
    const [selected, setSelected] = useState<number>(0);

    return (
        <div className="w-full h-full px-8 flex flex-col gap-8 scrollbar-hide">
            <HamburgerBar className="mt-14" />
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
            <div className="w-full p-1 shadow-md bg-white bg-opacity-40 rounded-xl">
                <div className="flex flex-col items-center border border-gentigreen p-4 rounded-xl gap-2">
                    <img src={Exclamation} alt="느낌표"></img>
                    <span>새로운 작업을 기다리고 있어요.</span>
                </div>
            </div>
            <div className="bg-[#D5D5D5] rounded-xl px-4 py-3 font-medium flex items-center justify-between">
                <span>새로운 작업 받기</span>
                <ToggleButton />
            </div>
            <div className="relative right-8 w-[calc(100%+4rem)] flex-grow shadow-[0px_-3px_20px_2px_rgba(0,0,0,0.1)] rounded-t-3xl bg-white flex flex-col items-center">
                <h2 className="my-4">내 작업실</h2>
                <div className="w-full border-b-2"></div>
                <div className="w-full flex flex-row flex-nowrap items-center overflow-x-scroll scrollbar-hide">
                    {test.map((item, index) => (
                        <div
                            key={item.title}
                            className="py-4 w-1/3 flex-grow-0 flex-shrink-0 flex items-center justify-center"
                            onClick={() => setSelected(index)}
                        >
                            <button className={`${selected === index ? "font-bold border-b-black border-b-2" : ""}`}>{item.title}</button>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col flex-grow justify-end py-8">
                    <div className="flex flex-col items-center gap-1">
                        <img src={Folder} alt="폴더 아이콘"></img>
                        <p className="text-[#d5d5d5]">현재 진행 중인 작업이 없어요.</p>
                        <p className="text-[#777777] font-light text-[0.75rem]">작업은 별점이 높은 사람에게 우선 배정되어요.</p>

                        <p className="mt-2 text-[#777777] font-light text-[0.75rem] w-[70%] text-center">
                            제출 제한 시간은 6시간이며, 2시간 내로 제출시 5,500원, 4시간 내로 제출시 4,500원 6시간 내로 제출시 3,500원이 지급되어요.
                        </p>
                    </div>
                </div>
            </div>
            <GreenCloudSvg className="absolute top-0 left-0 -z-10" />
        </div>
    );
};

export default MainPage;
