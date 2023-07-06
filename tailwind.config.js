/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "gray-99": "#c5c9d199",
                "dark-gray": "#3e393a",
                "select-contents": "#DCDEE3",

                navy: "#0B2451",
                "dark-gray": "#333333",
                gray: "#70777F",
                "light-gray": "#70777F66",
                "light-gray2": "#c5c9d1",
                "gray-blue": "#A5B4D1",
                "gray-blue-66": "#A5B4D166",
                "light-gray-blue": "#F8FAFF",
                blue: "#3574e6",
                "light-blue": "#D6E2F8",
                "light-blue-99": "#d6e2f899",
                red: "#ED5448",
            },
            borderWidth: {
                1: "1px",
            },
            height: {
                input: "43px",
                "mobile-input": "45px",
                1.2: "1.2px",
            },
            width: {
                input: "384px",
                82: "22rem",
            },
            transitionProperty: {
                "font-size": "font-size",
                border: "border",
            },
            flexBasis: {
                "4/10": "40%",
                "3/10": "30%",
            },
            opacity: {
                80: 0.8,
            },
        },
    },
    plugins: [],
};
