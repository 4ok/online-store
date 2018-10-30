import * as fetch from 'jest-fetch-mock';
import fetchApi, { RestMethods } from '../fetchApi'

describe('Fetch api', () => {

	beforeEach(() => {
		fetch.resetMocks()
	})

	it('Calls "catalog/items.json" and returns data', () => {
		const responseJson = {
			success: true,
			error: null,
			data: [
				{
					id: 1,
					name: "Omega Men's",
					desc: 'Analog Display Swiss Automatic Silver Watch',
					price: 1915,
					image: 'images/catalog/watches/1.jpg',
					rate: 2.2,
					stock: 3,
				},
				{
					id: 2,
					name: 'Seiko Astron Giugiaro',
					desc: "Dual Strap Analogue Men's Watch",
					price: 327,
					image: 'images/catalog/watches/2.jpg',
					rate: 4.1,
					stock: 20,
				},
			],
		}

		const params = {
			api: {
				method: RestMethods.get,
				path: 'catalog/items.json',
				version: 1.0,
			}
		}

		fetch.mockResponseOnce(JSON.stringify(responseJson))

		fetchApi(params)
			.then((response) => {
				expect(response).toEqual(responseJson)
			})
	  })
});
