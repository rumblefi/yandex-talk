import React from 'react'
import './SubjectLabel.scss'
import Label from '../Label/Label'
import Field from '../Field/Field'

const SubjectLabel = ({className,title,placeholder}) => (
	<Label className={className} title={title} >
		<Field placeholder={placeholder} />
	</Label>
)

export default SubjectLabel