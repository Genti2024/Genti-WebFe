import { useNavigate } from "react-router-dom";

const AccountInfoPage = () => {
    const account = {
        name: "홍길동",
        bank: "국민은행",
        accountNumber: "123-456-7890",
    };

    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-between bg-green3 h-full p-8">
            {account ? (
                <>
                    <div className="flex flex-col gap-4">
                        <p className="font-bold">등록된 계좌 정보를 확인하세요.</p>
                        <p className="flex flex-col gap-1">
                            <p className="text-[0.875rem] text-grey2">예금주명</p>
                            <p className="font-bold">{account.name}</p>
                        </p>
                        <p className="flex flex-col gap-1">
                            <p className="text-[0.875rem] text-grey2">은행명</p>
                            <p className="font-bold">{account.bank}</p>
                        </p>
                        <p className="flex flex-col gap-1">
                            <p className="text-[0.875rem] text-grey2">계좌번호</p>
                            <p className="font-bold">{account.accountNumber}</p>
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <div className="font-bold text-[1.25rem]">등록된 계좌가 없습니다!</div>
                </>
            )}
            <button className="w-full bg-grey6 text-[1.25rem] p-4 rounded-md shadow-lg" onClick={() => navigate("../registration")}>
                {account ? "계좌 변경하기" : "계좌 등록하기"}
            </button>
        </div>
    );
};

export default AccountInfoPage;
