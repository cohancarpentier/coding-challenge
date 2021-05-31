import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AlbumDetails from 'pages/AlbumDetails'
import Albums from 'pages/Albums'
import Login from 'pages/Login'
import PostDetails from 'pages/PostDetails'
import Posts from 'pages/Posts'

const Routes: FC = () => (
	<Router>
		<Switch>
			<Route path="/albums/:albumId">
				<AlbumDetails />
			</Route>
			<Route path="/albums">
				<Albums />
			</Route>
			<Route path="/posts/:postId">
				<PostDetails />
			</Route>
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
