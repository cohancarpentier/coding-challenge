import React, { ChangeEvent, FC, useState } from 'react'
import { FormControl, Grid, InputLabel, LinearProgress, List, MenuItem, Select, Typography } from '@material-ui/core'
import { API_URL } from 'index'
import useSWR from 'swr'

import { Layout, PostListItem } from 'components'
import { Post } from 'types/post'

const Posts: FC = () => {
	const { data: posts } = useSWR<Post[]>(`${API_URL}/posts`)
	const [filter, setFilter] = useState<string>('NO_FILTER')

	const filters = [
		{
			key: 'NO_FILTER',
			label: 'No filter',
		},
		{
			key: 'ALPHABETICAL',
			label: 'Alphabetical',
		},
		{
			key: 'DATE',
			label: 'By date',
			isDisabled: true,
		},
	]

	const handleFilterChange = (event: ChangeEvent<{ value: unknown }>) => {
		setFilter(event.target.value as string)
	}

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
					<Grid container justify="space-between" spacing={2} alignItems="center">
						<Grid item>
							<Typography gutterBottom variant="h5" align="center">
								Today's posts
							</Typography>
						</Grid>
						<Grid item>
							<FormControl variant="outlined">
								<InputLabel id="filter-select">Filter by</InputLabel>
								<Select labelId="filter-select" value={filter} onChange={handleFilterChange} label="Filter">
									{filters.map(({ key, label, isDisabled }) => (
										<MenuItem key={key} disabled={isDisabled} value={key}>
											{label}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
					</Grid>

					<List>
						{posts
							.sort((a, b) => {
								if (filter === 'ALPHABETICAL') {
									return a.title.localeCompare(b.title)
								}

								return a.id.toString().localeCompare(b.id.toString())
							})
							.map(({ id, title, body, ...otherProps }) => (
								<PostListItem key={id} id={id} title={title} body={body} {...otherProps}></PostListItem>
							))}
					</List>
				</>
			)}
		</Layout>
	)
}

export default Posts
