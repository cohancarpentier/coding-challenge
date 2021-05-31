import React, { FC } from 'react'
import { useTitle } from 'react-use'
import { Container, makeStyles, Theme } from '@material-ui/core'

import Header from './Header'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '100%',
		maxWidth: 860,
		marginTop: 72,
		backgroundColor: theme.palette.background.paper,
		border: '1px solid #eee',
		margin: theme.spacing(2, 'auto'),
		borderRadius: 4,
		padding: theme.spacing(4, 3),
	},
}))

interface LayoutProps {
	title: string
}

const Layout: FC<LayoutProps> = ({ title, children }) => {
	const classes = useStyles()
	useTitle(title)

	return (
		<>
			<Header title={title} />

			<Container className={classes.root}>{children!}</Container>
		</>
	)
}

export default Layout
