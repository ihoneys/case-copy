const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    //console.log(app)
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://10.1.95.110:9001/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    )
}
