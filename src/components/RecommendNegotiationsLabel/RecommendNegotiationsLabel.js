import React from 'react'
import './RecommendNegotiationsLabel.scss'
import Label from '../Label/Label'
import MeetingNegotiation from '../MeetingNegotiation/MeetingNegotiation'

const data = [
	{
		id: '1',
		startTime:'16:00',
		endTime:'16:30',
		name:'Готем',
		floor:'4 этаж'
	},
	{
		id: '2',
		startTime:'16:00',
		endTime:'16:30',
		name:'Поле непаханное',
		floor:'4 этаж'
	},
	{
		id: '3',
		startTime:'16:00',
		endTime:'16:30',
		name:'Тёмная башня',
		floor:'4 этаж'
	}
]

const meetingNegotiationItems = data.map( (negotion) =>  
	<MeetingNegotiation key={negotion.id} className="meeting-negotiation--recommend recommend-negotiations-label__item" data={negotion} />
)

const DateLabel = ({className,title,placeholder}) => (
	<Label className={className} title={title} >
		{meetingNegotiationItems}
	</Label>
)

export default DateLabel