import { createPortal } from "react-dom";

const FooterModal = ({ children }: { children: React.ReactNode }) => {
    return createPortal(
        <div className="fixed top-0 w-full h-full backdrop-blur-sm  bg-black bg-opacity-30">
            <div className="absolute bottom-0 w-full bg-white rounded-t-[3rem] p-6">{children}</div>
        </div>,
        document.getElementById("footer-modal")!
    );
};

export default FooterModal;
