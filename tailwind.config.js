/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                audiowide: ['Audiowide', 'cursive'],
            },
            colors: {
                'crimson': {
                    '50': '#FF7475',
                    '100': '#FF6068',
                    '200': '#FF6C78',
                    '300': '#FF516B',
                    '400': '#E7005B',
                    '500': '#D3495A',
                    '600': '#BC0F58',
                },
                'orchid': {
                    '50': '#4D204C',
                    '100': '#430030',
                    '200': '#1B0643',
                    '300': '#160438',
                    '400': '#18053A',
                    '500': '#8F0050',
                    '600': '#141414',
                },
            },  
        },
    },
    plugins: [],
};