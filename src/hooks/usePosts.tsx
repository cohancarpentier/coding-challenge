import { useState } from 'react'
import { useAsync } from 'react-use'

import { Post } from 'types/post'
import fetchItems from 'utils/fetchItems'

const usePosts = (): Post[] | undefined => {
	const [posts, setPosts] = useState<Post[]>()

	useAsync(async () => {
		setPosts(
			await fetchItems({
				type: 'posts',
			}),
		)
	}, [])

	return posts
}

export default usePosts
