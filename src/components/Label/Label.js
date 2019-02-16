import React from 'react'
import './Label.scss'
import {beautifyClassNames} from '../../helpers'

const Label = ({className,title,children}) => (
	<div className={beautifyClassNames(['label', className])} >
		<div className="label__title">{title}</div>
		{children}
	</div>
)

export default Label