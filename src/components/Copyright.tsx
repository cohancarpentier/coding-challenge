import React, { FC } from 'react'
import { Link, Typography } from '@material-ui/core'

const Copyright: FC = () => (
	<Typography variant="body2" color="textSecondary" align="center">
		{`Copyright ${new Date().getFullYear()} © `}
		<Link color="inherit" href="https://material-ui.com/">
			Cohan Carpentier
		</Link>
	</Typography>
)

export default Copyright
