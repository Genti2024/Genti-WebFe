import { useEffect, useState } from "react";

const ToggleButton = ({ initToggleState, onToggleOn, onToggleClose }: { initToggleState?: boolean; onToggleOn?: () => void; onToggleClose?: () => void }) => {
    const [isToggled, setIsToggled] = useState<boolean>(initToggleState || false);

    useEffect(() => {
        if (isToggled) {
            onToggleOn?.();
        } else {
            onToggleClose?.();
        }
    }, [isToggled, onToggleOn, onToggleClose]);

    return (
        <button
            className={`rounded-full flex items-center w-[3.25rem] h-8 duration-300 ${isToggled ? "bg-[#34C759]" : "bg-gray-400"}`}
            onClick={() => setIsToggled((prev) => !prev)}
        >
            <div className={`rounded-full shadow-lg bg-white w-7 h-7 duration-300 ${isToggled ? "translate-x-[1.375rem]" : "translate-x-0.5"}`}></div>
        </button>
    );
};

export default ToggleButton;
