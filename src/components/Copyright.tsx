import React, { FC } from 'react'
import { Typography } from '@material-ui/core'

const Copyright: FC = () => (
	<Typography data-testid="copyright" variant="body2" color="textSecondary" align="center">
		{`Copyright ${new Date().getFullYear()} © `}
		Cohan Carpentier
	</Typography>
)

export default Copyright
