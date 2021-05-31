import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

import App from './App'

const theme = createMuiTheme({
	props: {
		// Name of the component ⚛️
		MuiButtonBase: {
			// The properties to apply
			disableRipple: true, // No more ripple, on the whole application 💣!
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
