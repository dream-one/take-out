module.exports = {
    //axios域代理，解决axios跨域问题
    
    publicPath:process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/',
    devServer: {
        port:8085,
        proxy: {
            '': {
                target: 'https://elm.cangdu.org',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                      //直接用'api/接口名'进行请求.
                }
            }
        }
    }
}
