import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <div className="w-screen h-[1px] min-h-screen">
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </div>
    );
}

export default App;
