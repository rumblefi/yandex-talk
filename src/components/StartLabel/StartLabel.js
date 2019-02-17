import React from 'react'
import './StartLabel.scss'
import Label from '../Label/Label'
import Field from '../Field/Field'

const StartLabel = ({className,title,placeholder}) => (
	<Label className={className} title={title} >
		<div className="label__field-wrapper">
			<Field placeholder={placeholder} />
			<span className="label__divider" >—</span>
		</div>
	</Label>
)

export default StartLabel