import { creatorQuery } from "@/hooks/query/creatorServices/useCreatorServices";
import { useNavigate } from "react-router-dom";

const AccountInfoPage = () => {
    const navigate = useNavigate();

    const { data: account } = creatorQuery.useMyInfoQuery();
    return (
        <div className="flex flex-col justify-between bg-green3 h-full p-8">
            {account ? (
                <>
                    <div className="flex flex-col gap-4">
                        <p className="font-bold">등록된 계좌 정보를 확인하세요.</p>
                        <div className="flex flex-col gap-1">
                            <p className="text-[0.875rem] text-grey2">예금주명</p>
                            <p className="font-bold">{account?.response?.bankType ?? "테스트"}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[0.875rem] text-grey2">은행명</p>
                            <p className="font-bold">{account?.response?.bankType ?? "로딩중..."}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[0.875rem] text-grey2">계좌번호</p>
                            <p className="font-bold">{account?.response?.accountNumber ?? "테스트"}</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="font-bold text-[1.25rem]">등록된 계좌가 없습니다!</div>
                </>
            )}
            <button className="w-full bg-grey6 text-[1.25rem] p-4 rounded-md shadow-lg" onClick={() => navigate("/account/registration")}>
                {account ? "계좌 변경하기" : "계좌 등록하기"}
            </button>
        </div>
    );
};

export default AccountInfoPage;
