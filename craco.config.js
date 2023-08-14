/* eslint-disable @typescript-eslint/no-var-requires */
const isAnalyze = process.env.ANALYZE;
const path = require('path');
const webpack = require('webpack');
const WebpackBundleAnalyzer =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const StyleLintPlugin = require('stylelint-webpack-plugin');
const WepbackBar = require('webpackbar');

const addPath = dir => path.resolve(__dirname, dir);

/* 
	carco 的 babel 只能在 carco.config.js 里面配置
 */

/* 
	carco.config.js 不保证只加载一次
	see https://github.com/dilanx/craco/issues/518
 */
module.exports = () => {
	console.log('run get craco-config-object');

	return {
		// 自定义 fork 的react-scripts 路径
		// reactScriptsVersion:''
		webpack: {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			configure: (webpackConfig, { env, paths }) => {
				// 打包 moment 指定语言，一般moment 也是用dayjs 来替代的
				webpackConfig.plugins.push(
					new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/)
				);
				// analyze
				if (isAnalyze) webpackConfig.plugins.push(new WebpackBundleAnalyzer());

				webpackConfig.plugins.push(
					new StyleLintPlugin()
					// 默认处理['css', 'scss', 'sass']
				);

				return webpackConfig;
			},
			plugins: [new WepbackBar()],
			babel: {},
			style: {
				postcss: {
					mode: 'file',
				},
			},
			eslint: {
				mode: 'file',
			},
			externals: {
				// cdn 资源不打包
			},
			alias: {
				'@': addPath('./src'),
			},
		},
	};
};
