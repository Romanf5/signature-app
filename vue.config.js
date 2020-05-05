const GoogleFontsPlugin = require('google-fonts-plugin');

module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/assets/scss/_variables.scss";`
            }
        }
    },
    configureWebpack: {
        plugins: [
            new GoogleFontsPlugin({
                fonts: [
                    { family: "Manrope" },
                    { family: "DM Sans" },
                    { family: "Karla" }
                ]
            })
        ]
    }
};