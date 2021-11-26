const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        "/1.1/trends/place.json?id=23424848", createProxyMiddleware({
            target: "https://api.twitter.com",
            changeOrigin: true,
        })
    )
}
