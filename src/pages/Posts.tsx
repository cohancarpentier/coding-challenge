import React, { FC, useState } from 'react'
import { useAsync } from 'react-use'
import { LinearProgress, List, Typography } from '@material-ui/core'

import Layout from 'components/Layout'
import PostListItem from 'components/PostListItem'
import { Post } from 'types/post'
import fetchItems from 'utils/fetchItems'

const Posts: FC = () => {
	const [posts, setPosts] = useState<Post[]>()

	useAsync(async () => {
		setPosts(
			await fetchItems({
				type: 'posts',
			}),
		)
	}, [])

	if (!posts) {
		return <LinearProgress />
	}

	return (
		<Layout title="Posts">
			{posts.length === 0 ? (
				<Typography variant="h5" align="center">
					No posts
				</Typography>
			) : (
				<>
					<Typography gutterBottom variant="h5" align="center">
						Today's posts
					</Typography>
					<List>
						{posts.map(({ id, title, body, ...otherProps }) => (
							<PostListItem key={id} id={id} title={title} body={body} {...otherProps}></PostListItem>
						))}
					</List>
				</>
			)}
		</Layout>
	)
}

export default Posts
