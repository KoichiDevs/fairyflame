/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                albertus: ['Albertus'],
                proxima: ['ProximaNova']
            },

            boxShadow: {
                bot: '0px -53px 30px 20px rgba(11,7,6,0.89) inset',
                pinkglow: '0px 0px 133px 20px rgba(247,105,102,1)'
            },
            dropShadow: {
                glowi: '0px 0px 63px #f76966'
            },
            colors: {
                mypink: '#f76966'
            }
        },
    },
    plugins: [],
}
