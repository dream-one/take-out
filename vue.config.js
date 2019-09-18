module.exports = {
    //axios域代理，解决axios跨域问题
    publicPath: './',
    devServer: {
        port:8085,
        proxy: {
            '': {
                target: 'http://localhost:4000',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                      //直接用'api/接口名'进行请求.
                }
            }
        }
    }
}
