import React from 'react'
import { MemoryRouter } from 'react-router'
import { render, screen } from '@testing-library/react'

import Layout from './Layout'

test('renders its children', () => {
	render(
		<MemoryRouter>
			<Layout title="hello">Hello world</Layout>
		</MemoryRouter>,
	)
	const children = screen.getByText(/hello world/i)
	expect(children).toBeInTheDocument()
})

test('document title gets updated', () => {
	render(
		<MemoryRouter>
			<Layout title="hello">Hello world</Layout>
		</MemoryRouter>,
	)
	expect(document.title).toBe('hello')
})
