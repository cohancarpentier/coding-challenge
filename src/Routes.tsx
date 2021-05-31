import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Posts from './pages/Posts'

const Routes: FC = () => (
	<Router>
		<Switch>
			<Route path="/posts">
				<Posts />
			</Route>
			<Route path="/">
				<Login />
			</Route>
		</Switch>
	</Router>
)

export default Routes
