import React, { FC } from 'react'
import { useParams } from 'react-router'
import { Button, Card, CardActions, CardContent, LinearProgress, makeStyles, Typography } from '@material-ui/core'
import useSWR from 'swr'

import Layout from 'components/Layout'
import { Post } from 'types/post'
import { API_URL } from 'utils/fetchItems'

const useStyles = makeStyles(() => ({
	card: {
		border: '1px solid #eee',
	},
}))

const PostDetails: FC = () => {
	const { postId } = useParams<Record<string, string | undefined>>()
	const classes = useStyles()
	const { data: post } = useSWR<Post>(`${API_URL}/posts/${postId}`)

	if (!post) {
		return <LinearProgress />
	}

	return (
		<Layout title={post.title}>
			<Typography gutterBottom variant="h5" align="center">
				Post details
			</Typography>

			<Card className={classes.card} elevation={0}>
				<CardContent>
					<Typography noWrap gutterBottom variant="h5" component="h2">
						{post.title}
					</Typography>
				</CardContent>

				<CardActions>
					<Button size="small" color="primary" variant="outlined">
						Share
					</Button>
				</CardActions>
			</Card>
		</Layout>
	)
}

export default PostDetails
