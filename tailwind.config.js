module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/**/**/*.{js,jsx,ts,tsx}",
        "./public/*.html"
    ],
    theme: {
        extend: {
            colors: {
                'primary-dark': '#7731ea',
                'primary-medium': '#703ed1',
                'primary-light': '#bda0f6',
                'secondary': '#a779ff',
            },
            backgroundColor: {
                'primary-dark': '#7731ea',
                'primary-medium': '#703ed1',
                'primary-light': '#bda0f6',
                'secondary': '#a779ff',
            }

        },
    },
    plugins: [],
}
