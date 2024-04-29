interface ButtonProps {
    active?: boolean;
    onClick: () => void;
    text: string;
    className?: string;
}

const Button = ({ active, onClick, text, className }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`w-full py-2 rounded-md ${active ? "bg-gentigreen text-black font-bold text-[1.25rem]" : "bg-gray-200 text-black"} ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;
