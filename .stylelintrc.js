/* 更多用于本地 vascode 的格式化 */
module.export = {
	extends: [
		'stylelint-config-recommended',
		'stylelint-order',
		'stylelint-config-prettier',
		'stylelint-config-standard',
	],
	ignoreFiles: ['**/*.js'],
};
