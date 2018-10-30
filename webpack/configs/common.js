const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = (process.env.NODE_ENV === 'production')
const miniCssExtractPlugin = new MiniCssExtractPlugin({ filename: '[name].css' })

const rootDir = path.resolve(__dirname, '../../')
const buildStaticDir = 'static'

const urlLoader = ({ extensions, names: { dev, prod } }) => ({
	test: new RegExp(`\\.(${ extensions.join('|') })$`, 'i'),
	use: {
		loader: 'url-loader',
		options: {
			limit: 4096,
			fallback: {
				loader: 'file-loader',
				options: { name: isProd ? prod : dev },
			},
		},
	},
})

module.exports = {
	context: rootDir,
	entry: { index: './src/index.jsx' },
	output: {
		filename: '[name].js',
		publicPath: '',
	},
	plugins: [
		miniCssExtractPlugin,
	],
	resolve: {
		modules: [ 'node_modules' ],
		alias: { '~': `${ rootDir }/src` },
		extensions: [
			'.js', '.jsx',
			'.ts', '.tsx',
		],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: { loader: 'babel-loader' },
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{ loader: MiniCssExtractPlugin.loader },
					{
						loader: 'css-loader',
						options: { importLoaders: 1 },
					},
					'postcss-loader',
				],
			},
			{
				test: /\.svg$/,
				use: [
					{ loader: 'babel-loader' },
					{
						loader: 'react-svg-loader',
						options: { jsx: true },
					},
				],
			},
			urlLoader({
				extensions: [ 'eot', 'ttf', 'woff', 'woff2' ],
				names: {
					dev: 'fonts/[name].[ext]',
					prod: `${ buildStaticDir }/[name].[ext]`,
				},
			}),
			urlLoader({
				extensions: [ 'png', 'jpg', 'jpeg', 'gif' ],
				names: {
					dev: 'images/[name].[ext]',
					prod: `${ buildStaticDir }/[md5:hash:hex:8].[ext]`,
				},
			}),
		],
	},
}
