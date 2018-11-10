import pkg from "./package.json";
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin'
export default {
    mode: "spa",

    /*
     ** Headers of the page
     */
    head: {
        title: 'Fibos智能合约测试',
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: pkg.description }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, { rel: 'stylesheet', href: "https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css" }]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#3b8070" },

    /*
     ** Global CSS
     */
    css: ["muse-ui/dist/muse-ui.css"],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: ["@/plugins/muse-ui"],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        "@nuxtjs/axios"
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            config.output.publicPath = "_nuxt/"
            config.plugins.push(
                new MonacoWebpackPlugin()
            )
        },

    },
    generate: {
        subFolders: false
    }
};