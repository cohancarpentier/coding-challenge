import React from 'react'
import { MemoryRouter } from 'react-router'
import { render, screen } from '@testing-library/react'

import PostListItem from './PostListItem'

test('renders its title and body', () => {
	render(
		<MemoryRouter>
			<PostListItem id="1" title="hello" body="world" />
		</MemoryRouter>,
	)
	const title = screen.getByText(/hello/i)
	const body = screen.getByText(/world/i)
	expect(title).toBeInTheDocument()
	expect(body).toBeInTheDocument()
})

test('renders a link to the post details', () => {
	render(
		<MemoryRouter>
			<PostListItem id="1" title="hello" body="world" />
		</MemoryRouter>,
	)
	const link = screen.getByTestId('post-link')
	expect(link.href).toBe('http://localhost/posts/1')
})
