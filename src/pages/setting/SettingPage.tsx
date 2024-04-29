const SettingPage = () => {
    return (
        <div className="flex flex-col p-8 gap-4 bg-green3 w-full h-full items-start">
            <p className="text-grey2">설정 및 개인정보</p>
            <div className="relative w-[calc(100%+2rem)] right-4 border border-white"></div>
            <button>이용 약관</button>
            <button>개인정보 처리방침</button>
            <button>앱 버전 정보</button>
            <button>사업자 정보</button>
            <button>로그아웃</button>
            <button className="text-grey3">회원 탈퇴</button>
        </div>
    );
};

export default SettingPage;
