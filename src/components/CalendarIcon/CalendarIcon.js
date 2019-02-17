import React from 'react'
import {ReactComponent as Icon} from '../../assets/calendar.svg'
import {beautifyClassNames} from '../../helpers'

const CalendarIcon = ({className}) => (
	<Icon className={beautifyClassNames(['icon', className])} />
)

export default CalendarIcon