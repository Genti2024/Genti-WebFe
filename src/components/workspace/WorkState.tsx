import Exclamation from "@/assets/img/Exclamation.webp";
import ToggleButton from "@/components/common/ToggleButton";
import { creatorMutation } from "@/hooks/mutation/creatorMutation/useCreatorMutations";
import { creatorQuery } from "@/hooks/query/creatorServices/useCreatorServices";
import { useEffect, useState } from "react";

const WorkState = () => {
    const { data: myInfoData } = creatorQuery.useMyInfoQuery();

    const [workable, setWorkable] = useState(myInfoData?.response?.workable || false);
    const { mutate } = creatorMutation.useCreatorStatusMutations();

    const handleMutate = (status: boolean) => () => {
        mutate(status, {
            onSuccess: (data) => {
                setWorkable(data.response?.workable || false);
            },
        });
    };

    useEffect(() => {
        setWorkable(myInfoData?.response?.workable || false);
    }, [myInfoData]);

    return (
        <>
            <div className="w-full p-1 shadow-md bg-white bg-opacity-40 rounded-xl">
                <div className="flex flex-col items-center border border-gentigreen p-4 rounded-xl gap-2">
                    <img src={Exclamation} alt="느낌표" className={`${workable ? "grayscale-0" : "grayscale"}`}></img>
                    <span>{`${workable ? " 새로운 작업을 기다리고 있어요." : "새로운 작업을 받을 수 없는 상태에요"}`}</span>
                </div>
            </div>
            <div className="bg-[#D5D5D5] rounded-xl px-4 py-3 font-medium flex items-center justify-between">
                <span>새로운 작업 받기</span>
                <ToggleButton initToggleState={workable} onToggleOn={handleMutate(true)} onToggleClose={handleMutate(false)} />
            </div>
        </>
    );
};

export default WorkState;
