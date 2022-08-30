const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	chainWebpack: config => {
		config.module
			.rule('pug')
			.oneOf('vue-loader')
			.use('pug-bem')
			.loader('pug-bem-plain-loader')
			.options({
				b: true
			})
			.end()

		config.module
			.rule('pug')
			.oneOf('raw-pug-files')
			.use('pug-bem')
			.loader('pug-bem-plain-loader')
			.options({
				b: true
			})
			.end()
	},

	css: {
		sourceMap: true
	},

	pwa: {
		themeColor: '#4DBA87',
		msTileColor: '#000000',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'black',

		// настройки манифеста
		manifestOptions: {
			display: 'standalone',
			background_color: '#42B883',
			manifestCrossorigin: 'use-credentials'
		},
	}
})
