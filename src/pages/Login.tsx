import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import {
	Avatar,
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Link,
	makeStyles,
	TextField,
	Typography,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import { Copyright } from 'components'

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.grey[50],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

const Login: FC = () => {
	const classes = useStyles()
	const history = useHistory()
	const { register, watch } = useForm()
	const [loading, setLoading] = useState<boolean>(false)
	const watchUsername = watch('username', false)
	const watchPassword = watch('password', false)

	const goToPosts = () => {
		history.replace('/posts')
	}

	const onSubmit = (e) => {
		e.preventDefault()
		setLoading(true)

		// Simulate login flow
		setTimeout(() => {
			goToPosts()
		}, 1000)
	}

	return (
		<Grid container component="main" className={classes.root}>
			<Grid item xs={false} sm={4} md={7} className={classes.image} />

			<Grid item xs={12} sm={8} md={5}>
				<Box className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>

					<Typography component="h1" variant="h5">
						Sign in
					</Typography>

					<form className={classes.form} onSubmit={onSubmit} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email address"
							autoComplete="email"
							disabled={loading}
							inputProps={{
								'aria-required': true,
							}}
							autoFocus
							{...register('username', { required: true })}
						/>

						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							disabled={loading}
							inputProps={{
								'aria-required': true,
							}}
							{...register('password', { required: true })}
						/>

						<FormControlLabel
							control={<Checkbox disabled={loading} value="remember" color="primary" />}
							label="Remember me"
						/>

						<Button
							disableElevation
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							disabled={loading || !(watchUsername && watchPassword)}
							className={classes.submit}
						>
							Sign In
						</Button>

						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{"Don't have an account? Sign up!"}
								</Link>
							</Grid>
						</Grid>

						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</Box>
			</Grid>
		</Grid>
	)
}

export default Login
