import { useNavigate } from "react-router-dom";
import Storm from "@/assets/img/Storm.webp";
import Button from "../common/Button";

const SettleHeader = () => {
    const navigate = useNavigate();
    const money = 300000;
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
        </>
    );
};

export default SettleHeader;
