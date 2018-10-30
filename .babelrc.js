module.exports = {
	ignore: [ 'third_party' ],
	presets: [
		'@babel/preset-typescript',
		'@babel/preset-env',
		'@babel/preset-react',
	],
	plugins: [
		[ 'import', {
			libraryName: 'antd',
			libraryDirectory: 'es',
			style: 'css',
		}],
		[ '@babel/plugin-proposal-decorators', { legacy: true }],
		[ '@babel/plugin-proposal-class-properties', { loose: false }],
	],
}
