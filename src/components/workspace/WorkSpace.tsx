import Folder from "@/assets/img/Folder.webp";
import TestCharacter from "@/assets/img/TestCharacter.png";
import PurpleAlarm from "@/assets/img/PurpleAlarm.webp";
import { useState } from "react";
import DownloadSvg from "@/components/svg/DownloadSvg";
import Button from "@/components/common/Button";
import SubmitModal from "./SubmitModal";
import FooterBox from "../common/FooterBox";

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

const EmptyWorkSpace = () => {
    return (
        <div className="flex flex-col items-center gap-1 py-8">
            <img src={Folder} alt="폴더 아이콘"></img>
            <p className="text-[#d5d5d5]">현재 진행 중인 작업이 없어요.</p>
        </div>
    );
};

const CurrentWorkSpace = () => {
    const [submitModalOpened, setSubmitModalOpened] = useState<boolean>(false);
    return (
        <div className="flex flex-col p-8 gap-4 items-center">
            <div className="border bg-gray-100 border-gray-300 rounded-md w-full p-2">
                <p className="whitespace-pre-line">
                    {`고려대학교 중앙광장에서 빨간색 과잠을 입고 앉아서 막걸리 먹는 모습을 만들어줘 

카메라 앵글 : 위에서 촬영 
카메라 프레임 : 바스트샷
(상반신)`}
                </p>
            </div>
            <h4 className="font-bold">추천 프롬프트</h4>
            <div className="border bg-gray-100 border-gray-300 rounded-md w-full p-2">
                <p className="whitespace-pre-line">
                    {`A background set in an amusement park, featuring a person dressed in a school uniform, and striking a natural and relaxed pose, (amusement park backdrop:1.4), (person in school uniform:1.3), (natural pose:1.3), (relaxed demeanor:1.3), (casual stance:1.2), (playful atmosphere:1.2), (youthful fashion:1.2), (joyful expression:1.2), (carefree vibe:1.2), (fun-filled setting:1.2).`}
                </p>
            </div>
            <div className="w-full flex items-center justify-center">
                <h4 className="font-bold">자세 참고 사진</h4>
                <DownloadSvg className="absolute right-8" />
            </div>

            <img src={TestCharacter} className="max-h-[10rem]"></img>

            <div className="flex items-center my-4 gap-4">
                <img src={PurpleAlarm}></img>
                <div className="flex flex-col">
                    <p>마감까지</p>
                    <p>
                        <span className="mr-4 font-bold text-[1.25rem]">2시간 48분</span>
                        <span>남았어요!</span>
                    </p>
                </div>
            </div>
            <Button
                active
                onClick={() => {
                    setSubmitModalOpened(true);
                }}
                text="완성본 제출하기"
            />
            {submitModalOpened && <SubmitModal image={TestCharacter} setOpened={setSubmitModalOpened} />}
        </div>
    );
};

const WorkSpace = () => {
    const [selected, setSelected] = useState<number>(0);

    return (
        <FooterBox title="내 작업실">
            <div className="w-full flex flex-row flex-nowrap items-center overflow-x-scroll scrollbar-hide">
                {test.map((item, index) => (
                    <div key={item.title} className="py-4 w-1/3 flex-grow-0 flex-shrink-0 flex items-center justify-center" onClick={() => setSelected(index)}>
                        <button className={`${selected === index ? "font-bold border-b-black border-b-2" : ""}`}>{item.title}</button>
                    </div>
                ))}
            </div>
            <div className="flex flex-col w-full flex-grow justify-center">
                <CurrentWorkSpace />
            </div>
            <div className="flex flex-col items-center gap-1 py-8">
                <p className="text-[#777777] font-light text-[0.75rem]">작업은 별점이 높은 사람에게 우선 배정되어요.</p>

                <p className="mt-2 text-[#777777] font-light text-[0.75rem] w-[70%] text-center">
                    제출 제한 시간은 6시간이며, 2시간 내로 제출시 5,500원, 4시간 내로 제출시 4,500원 6시간 내로 제출시 3,500원이 지급되어요.
                </p>
            </div>
        </FooterBox>
    );
};

export default WorkSpace;
