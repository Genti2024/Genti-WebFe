import TestCharacter from "@/assets/img/TestCharacter.png";
import StarSvg from "@/components/svg/StartSvg";

const MyPage = () => {
    return (
        <>
            <div className="w-full p-4 shadow-md bg-white bg-opacity-40 rounded-xl flex items-center justify-center gap-4">
                <p>
                    <span>평균 별점은</span>
                    <span className="font-bold text-[2.125rem] text-green1"> {4.5}점</span>
                    <span className="font-bold text-[1.25rem]"> /5점</span>
                    <span> 입니다.</span>
                </p>
            </div>
            <p className="w-full flex justify-center items-center">
                <span className="font-bold text-[1.25rem]">{25}건</span>
                <span> 의 누적 작업이 있습니다.</span>
            </p>
            <h2 className="w-full flex justify-center">작업 내역</h2>
            <div className="border-t-2 w-full flex flex-col gap-4 overflow-y-scroll">
                {Array(20)
                    .fill(0)
                    .map((_, idx) => (
                        <div key={idx} className="flex items-end justify-between gap-4">
                            <img src={TestCharacter} alt="" className="h-16 aspect-square object-cover rounded-md" />
                            <div>
                                <p className="text-[0.875rem]">{"24.05.21"} 작업 </p>
                                <div className="flex items-center">
                                    {Array(5)
                                        .fill(0)
                                        .map((_, idx) => (
                                            <StarSvg key={idx} filled />
                                        ))}
                                </div>
                            </div>
                            <div className="flex-grow"></div>
                            <p className="text-grey3 font-light">
                                <span>{5}</span>
                                <span className="text-[0.75rem]"> /5점</span>
                            </p>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default MyPage;
