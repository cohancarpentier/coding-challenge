import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { Button, Card, CardActionArea, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core'

import { Album } from 'types/album'

const useStyles = makeStyles(() => ({
	root: {
		height: '100%',
		border: '1px solid lightgrey',
	},
}))

const AlbumListItem: FC<Partial<Album>> = ({ id, title }) => {
	const classes = useStyles()
	const history = useHistory()

	return (
		<Card className={classes.root} elevation={0}>
			<CardActionArea onClick={() => history.push(`/albums/${id}`)}>
				<CardContent>
					<Typography noWrap variant="h6" component="h2">
						{title}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" color="primary" variant="outlined">
						View
					</Button>
				</CardActions>
			</CardActionArea>
		</Card>
	)
}

export default AlbumListItem
