/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
    // 自定义 fork 的react-scripts 路径
    // reactScriptsVersion:''
    webpack:{
        alias:{
            "@components": path.resolve(__dirname,'src/components') ,
            "@resources":'./src/resources',
            "@assets":'./src/assets',
            "@pages":'./src/pages',
            '@store':'./src/store',
            "@constants":"./src/constants",
            "@utility":'./src/utility',
            "@hooks":'./src/hooks'
        }
    }
}