enum DataTypes {
	json = 'json'
}

export enum RestMethods {
	get = 'get',
	post = 'post',
	put = 'put',
	delete = 'delete',
	patch = 'patch'
}

interface DataTypesHeaders {
	json: object
}

interface Api {
	method: RestMethods,
	path: string,
	version: number,
}

interface FetchApiArgs {
	api: Api,
	data?: object,
	dataType?: DataTypes,
}

interface GetBodyArgs {
	dataType: DataTypes,
	data: object
}

//-------------------------------------------------------

const dataTypesHeaders: Readonly<DataTypesHeaders> = {
	[DataTypes.json]: {
		Accept: 'application/json',
		'Content-Type': 'application/json; charset=utf-8',
	},
}

const API_PREFIX = 'api'
const FAKE_HTTP_DELAY = 1000

const getBody = ({ dataType, data }: GetBodyArgs): string | null => {

	switch (dataType) {
		case DataTypes.json: {
			return JSON.stringify(data)
		}
		default: {
			return null
		}
	}
}

export default function fetchApi({
	api,
	data,
	dataType = DataTypes.json
}: FetchApiArgs) {

	const {
		method = RestMethods.get,
		path,
		version
	} = api

	if (!path) {
		throw new Error('Api method path isn\'t specified')
	}

	if (!version) {
		throw new Error('Api method version isn\'t specified')
	}

	const dataTypeHeaders: any = dataTypesHeaders[dataType];
	const url = `${ API_PREFIX }/v${ version.toFixed(1) }/${ path }`
	const options = {
		method: method.toUpperCase(),
		headers: dataTypeHeaders,
		body: data ? getBody({ dataType, data }) : null,
	}

	// Imitation http delay
	return fetch(url, options)
		.then((response: object) => {
			return new Promise(resolve => setTimeout(() => resolve(response), FAKE_HTTP_DELAY))
		})
}

