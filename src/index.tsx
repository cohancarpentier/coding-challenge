import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

import App from './App'

export const API_URL = 'https://jsonplaceholder.typicode.com'

const theme = createMuiTheme({
	props: {
		MuiButtonBase: {
			disableRipple: true,
		},
	},
	overrides: {
		MuiInputLabel: {
			outlined: {
				backgroundColor: '#fff',
				paddingLeft: 2,
				paddingRight: 8,
			},
		},
	},
})

ReactDOM.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</StrictMode>,
	document.getElementById('root'),
)
