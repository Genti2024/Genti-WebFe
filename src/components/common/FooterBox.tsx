const FooterBox = ({ children, title, className }: { children: React.ReactNode; title: string; className?: string }) => {
    return (
        <div
            className={
                "relative right-8 w-[calc(100%+4rem)] flex-grow shadow-[0px_-3px_20px_2px_rgba(0,0,0,0.1)] rounded-t-3xl bg-white flex flex-col items-center " +
                className
            }
        >
            <h2 className="my-4 font-bold">{title}</h2>
            <div className="w-full border-b-2"></div>
            {children}
        </div>
    );
};

export default FooterBox;
