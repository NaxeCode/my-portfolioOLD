import * as React from 'react'

import Header from './Header'

/** @jsx jsx */
import { jsx } from 'theme-ui'
i

export default function Home() {
	return (
		<div>
			<Header>
				<p
					sx={{
						fontFamily: 'heading',
					}}
				>
					This is cool
				</p>
			</Header>
			<body>
				<p style={{ fontFamily: 'body' }}>This is cool</p>
			</body>
		</div>
	)
}
