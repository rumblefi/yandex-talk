import React from 'react'
import './RecommendNegotiationsLabel.scss'
import Label from '../Label/Label'
import MeetingNegotiation from '../MeetingNegotiation/MeetingNegotiation'

const DateLabel = ({className,title,placeholder, negotiationClassname}) => (
	<Label className={className} title={title} >
		<MeetingNegotiation className={negotiationClassname} />
	</Label>
)

export default DateLabel