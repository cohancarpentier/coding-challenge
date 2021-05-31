export const API_URL = 'https://jsonplaceholder.typicode.com'

interface fetchItemsProps {
	type: string
	id?: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fetchItems = async ({ type, id }: fetchItemsProps) => {
	let endpoint = `${API_URL}/${type}`

	if (id) {
		endpoint += `/${id}`
	}

	try {
		const response = await fetch(endpoint).then((response) => response.json())
		return response
	} catch (error) {
		console.error(error)
		return error?.message
	}
}

export default fetchItems
