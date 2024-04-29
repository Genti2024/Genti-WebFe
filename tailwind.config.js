/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                gentigreen: "#00FF20",
                green1: "#1CE718",
                green3: "#C7FACE",
                grey2: "#6F6F6F",
                grey3: "#949494",
                grey6: "#F3F3F3",
            },
        },
        fontFamily: {
            pretendard: ["Pretendard"],
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
