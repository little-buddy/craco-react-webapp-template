# 继承于 ChrisUser/cra-template-complete-web-app

### 更改 browserslist

```
"browserslist": [
    "defaults",
    "not IE 11"
],
=>
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}

```

### 更改启动命令 craco

```
用craco来进行启动
添加 craco.config.js

```

### react-scripts 依赖的插件

```
	"@babel/core": "^7.16.0",
	"@pmmmwh/react-refresh-webpack-plugin": "^0.5.3",
	"@svgr/webpack": "^5.5.0",
	"babel-jest": "^27.4.2",
	"babel-loader": "^8.2.3",
	"babel-plugin-named-asset-import": "^0.3.8",
	"babel-preset-react-app": "^10.0.1",
	"bfj": "^7.0.2",
	"browserslist": "^4.18.1",
	"camelcase": "^6.2.1",
	"case-sensitive-paths-webpack-plugin": "^2.4.0",
	"css-loader": "^6.5.1",
	"css-minimizer-webpack-plugin": "^3.2.0",
	"dotenv": "^10.0.0",
	"dotenv-expand": "^5.1.0",
	"eslint": "^8.3.0",
	"eslint-config-react-app": "^7.0.1",
	"eslint-webpack-plugin": "^3.1.1",
	"file-loader": "^6.2.0",
	"fs-extra": "^10.0.0",
	"html-webpack-plugin": "^5.5.0",
	"identity-obj-proxy": "^3.0.0",
	"jest": "^27.4.3",
	"jest-resolve": "^27.4.2",
	"jest-watch-typeahead": "^1.0.0",
	"mini-css-extract-plugin": "^2.4.5",
	"postcss": "^8.4.4",
	"postcss-flexbugs-fixes": "^5.0.2",
	"postcss-loader": "^6.2.1",
	"postcss-normalize": "^10.0.1",
	"postcss-preset-env": "^7.0.1",
	"prompts": "^2.4.2",
	"react-app-polyfill": "^3.0.0",
	"react-dev-utils": "^12.0.1",
	"react-refresh": "^0.11.0",
	"resolve": "^1.20.0",
	"resolve-url-loader": "^4.0.0",
	"sass-loader": "^12.3.0",
	"semver": "^7.3.5",
	"source-map-loader": "^3.0.0",
	"style-loader": "^3.3.1",
	"tailwindcss": "^3.0.2",
	"terser-webpack-plugin": "^5.2.5",
	"webpack": "^5.64.4",
	"webpack-dev-server": "^4.6.0",
	"webpack-manifest-plugin": "^4.0.2",
	"workbox-webpack-plugin": "^6.4.1"

	resolve-url-loader 解决 scss 文件依赖问题

```

```
rem 主要用在字体上
vw用在 width、height、padding、margin、bordr 上 ，再加上媒体查询断点处理
```

### react-scripts 对于 postcss 的配置

```
开发环境 -> style-loader
生产环境 -> MiniCssExtractPlugin.loader
同一的
	css-loader 由外界cssOptions 进行控制
	post-loader 会判断是否使用 tailwindcss
		用 ->	tailwindcss
					postcss-flexbugs-fixes
					postcss-preset-env
					autoprefixer: {flexbox: 'no-2009',}
          stage: 3
		不用 ->
				postcss-flexbugs-fixes
				postcss-preset-env
				autoprefixer
				stage
				postcss-normalize

resolve-url-loader
preProcesser的配置，例如less和sass

PostCSS Normalize lets you use the parts of normalize.css or sanitize.css that you need from your browserslist.
```

```
遇到这个问题 Error resolving prettier configuration for
直接重启一下VsCode就好了
```

```
报错: 'React' is declared but its value is never read

{
  "compilerOptions": {
    "jsx": "react",
  },
}
```

```
(ESLint/Cypress): Parsing error: ESLint was configured to run on `<tsconfigRootDir>/component/TestComponent.cy.ts` using `parserOptions.project`

需要删除 // project: 'tsconfig.json' 并重启
```

```
prettier.resolveConfig.sync is not a function 一直报错

eslint-plugin-prettier@5.0.0
prettier@3.0.0
依旧是不兼容报错...
```

### stylelint配置

```
stylelint-config-prettier 官方已弃用，无需安装
```
