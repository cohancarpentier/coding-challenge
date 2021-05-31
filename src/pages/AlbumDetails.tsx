import React, { FC } from 'react'
import { useParams } from 'react-router'
import { Button, Card, CardActions, CardContent, LinearProgress, makeStyles, Typography } from '@material-ui/core'
import { API_URL } from 'index'
import useSWR from 'swr'

import { Layout } from 'components'
import { Album } from 'types/album'

const useStyles = makeStyles(() => ({
	card: {
		border: '1px solid #eee',
	},
}))

const AlbumDetails: FC = () => {
	const { albumId } = useParams<Record<string, string | undefined>>()
	const classes = useStyles()
	const { data: album } = useSWR<Album>(`${API_URL}/posts/${albumId}`)

	if (!album) {
		return <LinearProgress />
	}

	return (
		<Layout title={album.title}>
			<Typography gutterBottom variant="h5" align="center">
				Album details
			</Typography>

			<Card className={classes.card} elevation={0}>
				<CardContent>
					<Typography noWrap gutterBottom variant="h5" component="h2">
						{album.title}
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

export default AlbumDetails
