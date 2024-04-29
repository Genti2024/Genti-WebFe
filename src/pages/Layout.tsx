import GreenCloudSvg from "@/components/svg/GreenCloudSvg";
import MainHeader from "@/components/common/Header";
import NewWorkAlarm from "@/components/workspace/NewWorkAlarm";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="relative w-full h-full px-8 flex flex-col gap-8 scrollbar-hide">
            <NewWorkAlarm />
            <MainHeader />
            <Outlet />
            <GreenCloudSvg className="absolute top-0 left-0 -z-10" />
        </div>
    );
};

export default Layout;
