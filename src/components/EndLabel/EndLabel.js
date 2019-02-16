import React from 'react'
import './EndLabel.scss'
import Label from '../Label/Label'
import Field from '../Field/Field'

const EndLabel = ({className,title,placeholder}) => (
	<Label className={className} title={title} >
		<Field placeholder={placeholder} />
	</Label>
)

export default EndLabel