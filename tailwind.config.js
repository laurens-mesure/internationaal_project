module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                dark: "#121212",
                semiDark: "#272727",
                lightDark: "#353535",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
