const isProd = (process.env.NODE_ENV === 'production')

module.exports = {
	plugins: {
		autoprefixer: { grid: true },
		'postcss-preset-env': {
			preserve: false,
			stage: 1,
			importFrom: [
				'./src/css/media.css',
				'./src/css/vars.css',
			],
		},
		cssnano: isProd,
	},
}
