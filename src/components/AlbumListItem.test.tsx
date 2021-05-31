import React from 'react'
import { MemoryRouter } from 'react-router'
import { render, screen } from '@testing-library/react'

import AlbumListItem from './AlbumListItem'

test('renders its title', () => {
	render(
		<MemoryRouter>
			<AlbumListItem id="1" title="hello" />
		</MemoryRouter>,
	)
	const title = screen.getByText(/hello/i)
	expect(title).toBeInTheDocument()
})

test('renders a "View" button', () => {
	render(
		<MemoryRouter>
			<AlbumListItem id="1" title="hello" />
		</MemoryRouter>,
	)
	const viewButton = screen.getByText(/view/i)
	expect(viewButton).toBeInTheDocument()
})

test('renders a link to the album details', () => {
	render(
		<MemoryRouter>
			<AlbumListItem id="1" title="hello" />
		</MemoryRouter>,
	)
	const link = screen.getByTestId('album-link')
	expect(link.href).toBe('http://localhost/albums/1')
})
