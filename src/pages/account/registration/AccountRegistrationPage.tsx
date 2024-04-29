import Button from "@/components/common/Button";
import { useState } from "react";

const AccountRegistrationPage = () => {
    const [inputState, setInputState] = useState<{
        name: string;
        bank: string;
        accountNumber: string;
    }>({ name: "", bank: "", accountNumber: "" });

    return (
        <div className="flex flex-col p-4 gap-4 bg-green3 w-full h-full">
            <p className="font-bold">계좌 정보를 입력해주세요.</p>
            <div className="bg-white rounded-lg w-full p-4 flex flex-col gap-4 text-[0.875rem]">
                <div className="flex flex-col gap-2">
                    <label className="text-grey2">예금주명</label>
                    <input
                        className="border rounded-md outline-none p-1"
                        onChange={(e) => setInputState((prev) => ({ ...prev, name: e.target.value }))}
                        value={inputState.name}
                    ></input>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-grey2">은행명</label>
                    <input
                        className="border rounded-md outline-none p-1"
                        onChange={(e) => setInputState((prev) => ({ ...prev, bank: e.target.value }))}
                    ></input>
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
                    active={inputState.name.length > 0 && inputState.bank.length > 0 && inputState.accountNumber.length > 0}
                    className="text-[1rem]"
                    onClick={() => {}}
                ></Button>
            </div>
        </div>
    );
};

export default AccountRegistrationPage;
