import React from 'react'
import './CircleButton.scss'
import {beautifyClassNames} from '../../helpers'

const CircleButton = ({className,children}) => (
	<button type="button" className={beautifyClassNames(['circle-button', className])}>
		{children}
	</button>
)

export default CircleButton