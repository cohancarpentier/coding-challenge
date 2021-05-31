import React, { FC } from 'react'
import { Grid, LinearProgress, Typography } from '@material-ui/core'
import { API_URL } from 'index'
import useSWR from 'swr'

import AlbumListItem from 'components/AlbumListItem'
import Layout from 'components/Layout'
import { Album } from 'types/album'
import { Photo } from 'types/photo'

const Albums: FC = () => {
	const { data: albums } = useSWR<Album[]>(`${API_URL}/posts`)
	const { data: photos } = useSWR<Photo[]>(`${API_URL}/photos`)

	if (!albums || !photos) {
		return <LinearProgress />
	}

	return (
		<Layout title="Albums">
			{albums.length === 0 ? (
				<Typography variant="h5" align="center">
					No albums
				</Typography>
			) : (
				<Grid container spacing={2}>
					{albums.map(({ id, title, ...otherProps }) => (
						<Grid key={id} item xs={12} sm={6} md={4}>
							<AlbumListItem
								key={id}
								photo={photos.find((photo) => photo.albumId === id)}
								id={id}
								title={title}
								{...otherProps}
							></AlbumListItem>
						</Grid>
					))}
				</Grid>
			)}
		</Layout>
	)
}

export default Albums
