import Storm from "@/assets/img/Storm.webp";
import Button from "@/components/common/Button";
import FooterBox from "@/components/common/FooterBox";
import { useNavigate } from "react-router-dom";

const SettlePage = () => {
    const money = 300500;

    const navigate = useNavigate();
    return (
        <>
            <div className="w-full p-4 shadow-md bg-white bg-opacity-40 rounded-xl flex items-center justify-center gap-4">
                <img src={Storm} alt="번개"></img>
                <p className="flex gap-2 items-center">
                    <span className="font-bold text-[1.25rem] text-green1">{money.toLocaleString()}원</span>
                    <span>보유 중입니다.</span>
                </p>
            </div>
            <div className="flex items-center justify-between gap-4">
                <Button onClick={() => navigate("/account/info")} text="계좌관리" className="text-black" />
                <Button active onClick={() => {}} text="캐시아웃 신청" className="text-[1rem] text-white bg-green1" />
            </div>
            <FooterBox title="정산내역" className="overflow-y-scroll">
                <div className="w-full px-4 flex flex-col overflow-y-scroll">
                    {Array(20)
                        .fill(0)
                        .map((_, index) => (
                            <div key={index} className="flex items-end justify-start py-2 border-b-2 border-b-gray6">
                                <img src={Storm} alt="번개" className="h-14"></img>
                                <div className="flex flex-col -space-y-1">
                                    <span className="font-bold">2024.05.01</span>
                                    <p>
                                        <span className="text-green1">{index > 0 ? "+" : "-"}</span>
                                        <span>{index.toLocaleString()}원</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </FooterBox>
        </>
    );
};

export default SettlePage;
