import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'

import { Album } from 'types/album'
import { Photo } from 'types/photo'

const useStyles = makeStyles(() => ({
	root: {
		height: '100%',
		border: '1px solid lightgrey',
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
}))

interface AlbumListItemProps extends Album {
	photo: Photo
}

const AlbumListItem: FC<Partial<AlbumListItemProps>> = ({ id, photo, title }) => {
	const classes = useStyles()

	return (
		<Link data-testid="album-link" to={`/albums/${id}`} style={{ textDecoration: 'none' }}>
			<Card className={classes.root} elevation={0}>
				<CardMedia className={classes.media} image={photo?.thumbnailUrl} title={photo?.title} />
				<CardContent>
					<Typography noWrap variant="h6" component="h2">
						{title}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" component="span" color="primary" variant="outlined">
						View
					</Button>
				</CardActions>
			</Card>
		</Link>
	)
}

export default AlbumListItem
