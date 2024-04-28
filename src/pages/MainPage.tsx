import GreenCloudSvg from "@/components/svg/GreenCloudSvg";
import NewWorkAlarm from "@/components/workspace/NewWorkAlarm";
import WorkSpace from "@/components/workspace/WorkSpace";
import MainHeader from "@/components/workspace/Header";
import WorkState from "@/components/workspace/WorkState";

const MainPage = () => {
    return (
        <div className="relative w-full h-full px-8 flex flex-col gap-8 scrollbar-hide">
            <NewWorkAlarm />
            <MainHeader />
            <WorkState />
            <WorkSpace />
            <GreenCloudSvg className="absolute top-0 left-0 -z-10" />
        </div>
    );
};

export default MainPage;
