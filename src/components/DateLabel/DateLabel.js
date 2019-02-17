import React from 'react'
import './DateLabel.scss'
import Label from '../Label/Label'
import Field from '../Field/Field'
import CalendarIcon from '../CalendarIcon/CalendarIcon'

const DateLabel = ({className,title,placeholder}) => (
	<Label className={className} title={title} >
		<div className="label__field-wrapper">
			<Field placeholder={placeholder} />
			<CalendarIcon />
		</div>
	</Label>
)

export default DateLabel