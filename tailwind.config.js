/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'gae': ["Gaegu", "sans-serif"],
            },
        },
    },
    plugins: [],
}

