/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                gentigreen: "#00FF20",
            },
        },
        fontFamily: {
            pretendard: ["Pretendard"],
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
