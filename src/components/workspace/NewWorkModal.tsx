import { useEffect, useState } from "react";
import Button from "../common/Button";
import FooterModal from "../common/FooterModal";

const NewWorkModal = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    useEffect(() => {
        const event = new EventSource("http://localhost:8080/api/v1/work");

        event.addEventListener("message", (e) => {
            setModalOpen(true);
            const modalData = JSON.parse(e.data);
        });
    }, []);

    return (
        <>
            {modalOpen && (
                <FooterModal>
                    <div className="flex flex-col items-center gap-8">
                        <h2 className="font-bold text-[1.5rem]">지금 주문이 들어왔어요!</h2>
                        <div className="border bg-gray-100 border-gray-300 rounded-md w-full p-2">
                            <p className="whitespace-pre-line">
                                {`고려대학교 중앙광장에서 빨간색 과잠을 입고 앉아서 막걸리 먹는 모습을 만들어줘 

            카메라 앵글 : 위에서 촬영 
            카메라 프레임 : 바스트샷
            (상반신)`}
                            </p>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <Button active={true} onClick={() => {}} text="수락하기" />
                            <Button active={false} onClick={() => {}} text="거절하기" />
                        </div>
                        <p className="whitespace-pre-line text-center text-[0.75rem]">{`거절하기를 누르면
해당주문은 다시 수락할 수 없어요!`}</p>
                    </div>
                </FooterModal>
            )}
        </>
    );
};

export default NewWorkModal;
