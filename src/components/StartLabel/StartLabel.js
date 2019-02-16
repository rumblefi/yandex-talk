import React from 'react'
import './StartLabel.scss'
import Label from '../Label/Label'
import Field from '../Field/Field'

const StartLabel = ({className,title,placeholder}) => (
	<Label className={className} title={title} >
		<Field placeholder={placeholder} />
	</Label>
)

export default StartLabel