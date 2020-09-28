const path = require("path");
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports = {
    lintOnSave: false,
    devServer: {
        port: 8000,
        proxy: {
            '/api': {
                target: 'http://182.92.128.115/'
            }
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                components:resolve("src/components"),
                http:resolve("src/http"),
                pages:resolve("src/pages"),
                router:resolve("src/router"),
                routes:resolve("src/routes"),
                store:resolve("src/store"),
                mock:resolve("src/mock")
            }
        }
    }

}