import { Route, Routes } from "react-router-dom";
import AccountInfoPage from "./info/AccountInfoPage";
import AccountRegistrationPage from "./registration/AccountRegistrationPage";

const AccountPage = () => {
    return (
        <Routes>
            <Route path="/info" element={<AccountInfoPage />} />
            <Route path="/registration" element={<AccountRegistrationPage />} />
            <Route path="*" element={<div>잘못된 접근입니다!</div>} />
        </Routes>
    );
};

export default AccountPage;
