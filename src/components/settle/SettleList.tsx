import FooterBox from "../common/FooterBox";
import Storm from "@/assets/img/Storm.webp";

const SettleList = () => {
    return (
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
    );
};

export default SettleList;
