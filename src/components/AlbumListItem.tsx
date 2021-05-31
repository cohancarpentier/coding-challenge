import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core'

import { Album } from 'types/album'

const useStyles = makeStyles(() => ({
	root: {
		height: '100%',
		border: '1px solid lightgrey',
	},
}))

const AlbumListItem: FC<Partial<Album>> = ({ id, title }) => {
	const classes = useStyles()

	return (
		<Link data-testid="album-link" to={`/albums/${id}`} style={{ textDecoration: 'none' }}>
			<Card className={classes.root} elevation={0}>
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
