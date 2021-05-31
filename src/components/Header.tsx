import React, { FC } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
	AppBar,
	Grid,
	IconButton,
	Link as MuiLink,
	makeStyles,
	Theme,
	Toolbar,
	Tooltip,
	Typography,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles((theme: Theme) => ({
	link: {
		color: theme.palette.common.white,
	},
}))

interface HeaderProps {
	title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
	const classes = useStyles()
	const history = useHistory()

	return (
		<AppBar position="fixed" elevation={0}>
			<Toolbar variant="dense">
				<Grid container justify="space-between" wrap="nowrap" spacing={2} alignItems="center">
					<Grid item>
						<Tooltip title="Go back">
							<IconButton edge="start" onClick={() => history.goBack()} color="inherit" aria-label="menu">
								<ArrowBackIcon />
							</IconButton>
						</Tooltip>
					</Grid>
					<Grid item>
						<Typography variant="h6">{title}</Typography>
					</Grid>
					<Grid style={{ width: 'auto' }} container item spacing={2} justify="flex-end" wrap="nowrap">
						<Grid item>
							<MuiLink to="/posts" component={Link} className={classes.link}>
								Posts
							</MuiLink>
						</Grid>
						<Grid item>
							<MuiLink to="/albums" component={Link} className={classes.link}>
								Albums
							</MuiLink>
						</Grid>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}

export default Header
