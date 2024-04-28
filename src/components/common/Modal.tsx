import { createPortal } from "react-dom";

const Modal = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return createPortal(
        <div className="absolute top-0 flex items-center justify-center w-full h-full backdrop-blur-sm  bg-black bg-opacity-30">
            <div className={"bg-[#d7d7d7] rounded-lg p-6 max-w-[80%] " + className}>{children}</div>
        </div>,
        document.getElementById("modal")!
    );
};

export default Modal;
