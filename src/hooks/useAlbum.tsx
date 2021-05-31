import { useState } from 'react'
import { useAsync } from 'react-use'

import { Album } from 'types/album'
import fetchItems from 'utils/fetchItems'

const useAlbum = (id: string | undefined): Album | undefined => {
	const [album, setAlbum] = useState<Album>()

	useAsync(async () => {
		setAlbum(
			await fetchItems({
				type: 'albums',
				id,
			}),
		)
	}, [])

	return album
}

export default useAlbum
