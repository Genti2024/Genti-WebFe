interface ButtonProps {
    active: boolean;
    onClick: () => void;
    text: string;
}

const Button = ({ active, onClick, text }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`w-full py-2 rounded-md ${active ? "bg-gentigreen text-black font-bold text-[1.25rem]" : "bg-gray-200 text-black"}`}
        >
            {text}
        </button>
    );
};

export default Button;
