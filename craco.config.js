/* eslint-disable @typescript-eslint/no-var-requires */
const isAnalyze = process.env.ANALYZE
const path = require('path')
const webpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require("webpack")

module.exports = {
    // 自定义 fork 的react-scripts 路径
    // reactScriptsVersion:''
    webpack:{

			configure:(webpackConfig,{env,paths})=>{
				// 打包 moment 指定语言，一般moment 也是用dayjs 来替代的
				webpackConfig.plugins.push(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/,/zh-cn/))
				// analyze
				if(isAnalyze)
					webpackConfig.plugins.push(new webpackBundleAnalyzer());
				
				return webpackConfig
			},

			externals:{
				// cdn 资源不打包
			},
			
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
