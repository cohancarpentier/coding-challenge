import { useState } from 'react'
import { useAsync } from 'react-use'

import { Album } from 'types/album'
import fetchItems from 'utils/fetchItems'

const useAlbums = (): Album[] | undefined => {
	const [albums, setAlbums] = useState<Album[]>()

	useAsync(async () => {
		setAlbums(
			await fetchItems({
				type: 'albums',
			}),
		)
	}, [])

	return albums
}

export default useAlbums
