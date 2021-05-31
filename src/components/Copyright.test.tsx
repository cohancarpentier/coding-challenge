import React from 'react'
import { render, screen } from '@testing-library/react'

import Copyright from './Copyright'

test('renders the copyright', () => {
	render(<Copyright />)
	const copyright = screen.getByTestId('copyright')
	expect(copyright).toBeInTheDocument()
})
