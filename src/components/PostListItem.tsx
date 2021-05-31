import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description'

import { Post } from 'types/post'

const PostListItem: FC<Partial<Post>> = ({ title, id, body }) => (
	<Link data-testid="post-link" to={`/posts/${id}`} style={{ textDecoration: 'none' }}>
		<ListItem>
			<ListItemAvatar>
				<Avatar>
					<DescriptionIcon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText primary={title} secondary={body} />
		</ListItem>
	</Link>
)

export default PostListItem
