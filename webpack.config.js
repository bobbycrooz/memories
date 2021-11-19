// const webpack = require("webpack");
import webpack from "webpack";
module.exports = {
    //...
    resolve: {
        extensions: [".js", ".json", ".ts"],
    },

    plugins: [
        // other plugins,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        }),
    ],
};
