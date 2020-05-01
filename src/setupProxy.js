const {createProxyMiddleware} = require('http-proxy-middleware') 
// https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.1.1&referer=2
module.exports = function (app){
    app.use('/juooo',createProxyMiddleware({
        target:'https://api.juooo.com',
        changeOrigin:true,
        pathRewrite:{
            '^/juooo':''
        }
    }))
}
