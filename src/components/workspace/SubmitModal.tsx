import Button from "../common/Button";
import FooterModal from "../common/FooterModal";
import Exclamation from "@/assets/img/Exclamation.webp";

interface SubmitModalProps {
    image: string;
    setOpened: (opened: boolean) => void;
}

const SubmitModal = ({ image, setOpened }: SubmitModalProps) => {
    return (
        <FooterModal>
            <div className="flex flex-col items-center gap-2">
                <div className="flex flex-row gap-2">
                    <img src={Exclamation} />
                    <p className="font-bold text-[1.375rem] my-2">이 사진으로 제출하시겠어요?</p>
                </div>
                <img src={image} className="my-2 w-fit"></img>
                <Button text="제출하기" active={true} onClick={() => {}} />
                <Button
                    text="다시 선택하기"
                    active={false}
                    onClick={() => {
                        setOpened(false);
                    }}
                />
                <div className="text-sm text-[#949494] mt-2">제출 후에는 변경할 수 없어요</div>
            </div>
        </FooterModal>
    );
};

export default SubmitModal;
