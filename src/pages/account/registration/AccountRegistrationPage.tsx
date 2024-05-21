import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import { creatorMutation } from "@/hooks/mutation/creatorMutation/useCreatorMutations";
import { MyInfo, bankName } from "@/types/ApiReqRes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountRegistrationPage = () => {
    const [inputState, setInputState] = useState<Omit<MyInfo, "workable">>({
        bankType: "국민은행",
        accountNumber: "",
    });
    const [modalState, setModalState] = useState<{ modalOpen: boolean; message: string }>({
        modalOpen: false,
        message: "",
    });

    const [dropdownOpen, setDropdownOpen] = useState(true);

    const { mutate: registerAccount } = creatorMutation.useCreatorAccountMutations();
    const navigate = useNavigate();
    return (
        <div className="flex flex-col p-4 gap-4 bg-green3 w-full h-full">
            {modalState.modalOpen && (
                <Modal>
                    <div className="flex flex-col gap-2">
                        <div className="text-center">{modalState.message}</div>
                        <Button
                            text="확인"
                            className="text-[1rem] bg-green1 text-black"
                            active
                            onClick={() => {
                                setModalState({
                                    modalOpen: false,
                                    message: "",
                                });
                            }}
                        ></Button>
                    </div>
                </Modal>
            )}

            <div className="font-bold">계좌 정보를 입력해주세요.</div>
            <div className="bg-white rounded-lg w-full p-4 flex flex-col gap-4 text-[0.875rem]">
                <div className="flex flex-col gap-2">
                    <label className="text-grey2">예금주명</label>
                    <input className="border rounded-md outline-none p-1"></input>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-grey2">은행명</label>
                    <div className="cursor-pointer" onClick={() => setDropdownOpen(true)}>
                        <p className="border-2 p-2 border-gentigreen rounded-md font-bold">{inputState.bankType}</p>
                        {dropdownOpen && (
                            <ul
                                className="flex flex-col"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setDropdownOpen(false);
                                }}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                {bankName.map((bank) => (
                                    <li
                                        key={bank}
                                        className="hover:bg-grey6 p-1 rounded-md"
                                        onClick={() => {
                                            setInputState((prev) => ({ ...prev, bankType: bank }));
                                        }}
                                    >
                                        {bank}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-grey2">계좌번호</label>
                    <input
                        className="border rounded-md outline-none p-1"
                        onChange={(e) => setInputState((prev) => ({ ...prev, accountNumber: e.target.value }))}
                    ></input>
                </div>
                <Button
                    text="이 계좌로 등록하기"
                    active={inputState.bankType.length > 0 && inputState.accountNumber.length > 0}
                    className="text-[1rem]"
                    onClick={() => {
                        registerAccount(inputState, {
                            onSuccess: () => {
                                navigate("/account/info");
                            },
                            onError: (error) => {
                                setModalState({
                                    modalOpen: true,
                                    message: error.message,
                                });
                            },
                        });
                    }}
                ></Button>
            </div>
        </div>
    );
};

export default AccountRegistrationPage;
