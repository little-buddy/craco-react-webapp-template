/* eslint-disable @typescript-eslint/no-var-requires */
const isAnalyze = process.env.ANALYZE;
const path = require('path');
const { when, removePlugins } = require('@craco/craco');

const webpack = require('webpack');
const WebpackBundleAnalyzer =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const StyleLintPlugin = require('stylelint-webpack-plugin');
const WepbackBar = require('webpackbar');
const Smp = require('speed-measure-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const PreloadWebapckPlugin = require('@vue/preload-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const isEnvProduction = process.env.NODE_ENV === 'production';
const addPath = dir => path.resolve(__dirname, dir);

/* 
	carco 的 babel 只能在 carco.config.js 里面配置
 */

/* 
	carco.config.js 不保证只加载一次
	see https://github.com/dilanx/craco/issues/518
 */
module.exports = () => {
	console.log(isEnvProduction, 'run get craco-config-object');

	return {
		// 自定义 fork 的react-scripts 路径
		// reactScriptsVersion:''
		webpack: new Smp().wrap({
			configure: (config, { env, paths }) => {
				// eslint-disable-next-line no-param-reassign
				config.entry = {
					app: config.entry,
				};
				// eslint-disable-next-line no-param-reassign
				config.optimization.splitChunks = {
					cacheGroups: {
						reactLib: {
							test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|@reduxjs\/toolkit\/dist)[\\/]/,
							name: 'react-lib',
							chunks: 'all',
							enforce: true,
							priority: 40,
							reuseExistingChunk: true,
						},
						vendors: {
							name: `chunk-vendors`,
							test: /[\\/]node_modules[\\/]/,
							priority: -10,
							chunks: 'initial',
						},
						common: {
							name: `chunk-common`,
							minChunks: 2,
							priority: -20,
							chunks: 'initial',
							reuseExistingChunk: true,
						},
					},
				};

				removePlugins(config, (value, index, array) => {
					const pluginName = Object.getPrototypeOf(array[index]).constructor
						.name;

					if (pluginName === 'HtmlWebpackPlugin' && index !== 0) {
						return true;
					}

					if (['WebpackManifestPlugin'].indexOf(pluginName) > -1) {
						const plugin = array[index];
						if (!(plugin instanceof WebpackManifestPlugin)) {
							return true;
						}
					}

					return false;
				});

				return config;
			},
			plugins: [
				[
					new HtmlWebpackPlugin({
						inject: 'body',
						template: addPath('./public/index.html'),
						// external的js-cdn 可以配置在这里
						cdn: {
							js: [
								'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js',
								'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js',
								'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js',
								'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js',
							],
							css: [],
						},
						...(isEnvProduction
							? {
									minify: {
										removeComments: true,
										collapseWhitespace: true,
										removeRedundantAttributes: true,
										useShortDoctype: true,
										removeEmptyAttributes: true,
										removeStyleLinkTypeAttributes: true,
										keepClosingSlash: true,
										minifyJS: true,
										minifyCSS: true,
										minifyURLs: true,
									},
							  }
							: undefined),
					}),
					'prepend',
				],

				new WepbackBar(),
				new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
				// 默认处理['css', 'scss', 'sass']
				new StyleLintPlugin(),
				...when(isAnalyze, () => [new WebpackBundleAnalyzer()], []),
				// preload
				// [
				// 	new PreloadWebapckPlugin({
				// 		rel: 'preload',
				// 		include: 'initial',
				// 		fileBlacklist: [/\.map$/, /hot-update\.js$/],
				// 	}),
				// 	'append',
				// ],
				// // prefetch
				// [
				// 	new PreloadWebapckPlugin({
				// 		rel: 'prefetch',
				// 		include: 'asyncChunks',
				// 	}),
				// 	'append',
				// ],
				new WebpackManifestPlugin({
					fileName: 'asset-manifest.json',
					// publicPath: paths.publicUrlOrPath,
					generate: (seed, files, entrypoints) => {
						const manifestFiles = files.reduce((manifest, file) => {
							// eslint-disable-next-line no-param-reassign
							manifest[file.name] = file.path;
							return manifest;
						}, seed);
						const entrypointFiles = entrypoints.app.filter(
							fileName => !fileName.endsWith('.map')
						);

						return {
							files: manifestFiles,
							entrypoints: entrypointFiles,
						};
					},
				}),
			],
			babel: {
				// react 默认配置了
				// loaderOptions: {
				// 	cacheDirectory: true,
				// },
				plugins: [
					[
						'import',
						{
							libraryName: 'lodash',
							libraryDirectory: '',
							camel2DashComponentName: false,
						},
					],
				],
			},
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
		}),
	};
};
