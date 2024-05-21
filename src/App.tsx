import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import SettlePage from "./pages/settle/SettlePage";
import Layout from "./pages/Layout";
import MyPage from "./pages/mypage/MyPage";
import AccountPage from "./pages/account/AccountPage";
import SettingPage from "./pages/setting/SettingPage";
import loginQuery from "./hooks/query/loginServices/useLoginServices";

function App() {
    loginQuery.useLoginQuery();
    return (
        <div className="w-screen h-[1px] min-h-screen">
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/settle" element={<SettlePage />} />
                    <Route path="/mypage" element={<MyPage />} />
                </Route>
                <Route path="/account/*" element={<AccountPage />} />
                <Route path="/setting" element={<SettingPage />} />
                <Route path="/*" element={<div>잘못된 접근입니다!</div>} />
            </Routes>
        </div>
    );
}

export default App;
