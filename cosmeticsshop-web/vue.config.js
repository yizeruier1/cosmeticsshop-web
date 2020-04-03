module.exports = {
    productionSourceMap: false,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 75, // 换算的基数
                        selectorBlackList: ['van-'], // 忽略转换正则匹配项
                        propList: ['*'],
                    })
                ]
            }
        }
    },
}
