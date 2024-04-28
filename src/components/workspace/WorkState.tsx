import Exclamation from "@/assets/img/Exclamation.webp";
import ToggleButton from "@/components/common/ToggleButton";

const WorkState = () => {
    return (
        <>
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
        </>
    );
};

export default WorkState;
