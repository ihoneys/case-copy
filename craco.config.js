const path = require('path')
const CracoAntDesignPlugin = require("craco-antd");
const resolve = dir => path.resolve(__dirname, dir)
module.exports = {
    webpack: {
        // 配置别名
        alias: {
            "@": resolve("src"),
            "components": resolve("src/components")
        },

    },
    // 修改antd-mobile主题颜色
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: {
                    "@brand-primary": "#00C6B8",
                },
            },
        },
    ],
}