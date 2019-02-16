import React from 'react'
import './CircleButton.scss'

const CircleButton = ({className,children}) => (
	<button type="button" className={`circle-button ${className}`}>
		{children}
	</button>
)

export default CircleButton