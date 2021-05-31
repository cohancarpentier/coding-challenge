import React, { FC } from 'react'
import { CssBaseline } from '@material-ui/core'
import { SWRConfig } from 'swr'

import Routes from './Routes'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const App: FC = () => (
	<SWRConfig
		value={{
			fetcher,
		}}
	>
		<CssBaseline />
		<Routes />
	</SWRConfig>
)

export default App
