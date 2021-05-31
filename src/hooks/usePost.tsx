import { useState } from 'react'
import { useAsync } from 'react-use'

import { Post } from 'types/post'
import fetchItems from 'utils/fetchItems'

const usePost = (id: string | undefined): Post | undefined => {
	const [post, setPost] = useState<Post>()

	useAsync(async () => {
		setPost(
			await fetchItems({
				type: 'posts',
				id,
			}),
		)
	}, [])

	return post
}

export default usePost
