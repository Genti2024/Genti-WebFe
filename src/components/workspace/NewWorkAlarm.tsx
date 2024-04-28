import { useEffect, useState } from "react";
import Button from "@/components/common/Button";
import FooterModal from "@/components/common/FooterModal";
import GreenAlarm from "@/assets/img/GreenAlarm.webp";
import Modal from "@/components/common/Modal";

const NewWorkAlarm = () => {
    const [alarmOpen, setAlarmOpen] = useState<boolean>(true);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    useEffect(() => {
        const event = new EventSource("http://localhost:8080/api/v1/work");

        event.addEventListener("message", () => {
            setAlarmOpen(true);
        });
    }, []);

    return (
        <>
            {alarmOpen && (
                <FooterModal>
                    <div className="flex flex-col items-center gap-8">
                        <h2 className="font-bold text-[1.5rem] flex items-center gap-2">
                            <img src={GreenAlarm} alt=""></img>지금 주문이 들어왔어요!
                        </h2>
                        <div className="border bg-gray-100 border-gray-300 rounded-md w-full p-2">
                            <p className="whitespace-pre-line">
                                {`고려대학교 중앙광장에서 빨간색 과잠을 입고 앉아서 막걸리 먹는 모습을 만들어줘 

            카메라 앵글 : 위에서 촬영 
            카메라 프레임 : 바스트샷
            (상반신)`}
                            </p>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <Button
                                active={true}
                                onClick={() => {
                                    setAlarmOpen(false);
                                    setModalOpen(true);
                                }}
                                text="수락하기"
                            />
                            <Button
                                active={false}
                                onClick={() => {
                                    setAlarmOpen(false);
                                }}
                                text="거절하기"
                            />
                        </div>
                        <p className="whitespace-pre-line text-center text-[0.75rem]">{`거절하기를 누르면
해당주문은 다시 수락할 수 없어요!`}</p>
                    </div>
                </FooterModal>
            )}
            {modalOpen && (
                <Modal className="p-0">
                    <>
                        <div className="px-8 py-4 flex flex-col items-center text-center whitespace-pre-line gap-3">
                            <h2 className="text-lg font-bold">주의해주세요!</h2>
                            <p className="text-[0.75rem]">주문을 수락한 후 제한 시간 내에 작업을 완료하지 않은 경우, 3일간 주문을 받을 수 없어요.</p>
                        </div>
                        <div className="relative mt-4 border-t border-t-[#3C3C43] border-opacity-35 flex">
                            <button
                                className="w-1/2 text-[#989898] p-2"
                                onClick={() => {
                                    setModalOpen(false);
                                }}
                            >
                                제작 취소
                            </button>
                            <div className="relative border-l border-l-[#3C3C43] border-opacity-35 h-[calc(100+3rem)]"></div>
                            <button className="w-1/2 font-bold p-2">네,확인했어요.</button>
                        </div>
                    </>
                </Modal>
            )}
        </>
    );
};

export default NewWorkAlarm;
