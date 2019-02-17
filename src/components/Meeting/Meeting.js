import React from 'react'
import './Meeting.scss'
import CircleButton from '../CircleButton/CircleButton'
import {Link} from '@reach/router'
import CloseIcon from '../CloseIcon/CloseIcon'
import SubjectLabel from '../SubjectLabel/SubjectLabel'
import DateLabel from '../DateLabel/DateLabel'
import StartLabel from '../StartLabel/StartLabel'
import EndLabel from '../EndLabel/EndLabel'

export default class Meeting extends React.Component{

	render() {
		return (
			<div className="meeting">
				<div className="meeting__container">
					<div className="meeting__top">
						<div className="meeting__title">Новая встреча</div>
						<Link to="/" >
							<CircleButton  >
								<CloseIcon />
							</CircleButton>
						</Link>
					</div>
					<div className="meeting-body">
						<SubjectLabel className="subject-label" title="Тема" placeholder="О чем будем говорить" />
						<div className="meeting-body__partial">
							<DateLabel className="date-label" title="Дата" placeholder="Дата" />
							<StartLabel className="start-label" title="Начало" placeholder="Начало" />						
							<EndLabel className="end-label" title="Конец" placeholder="Конец" />
						</div>
					</div>
				</div>
			</div>
		)
	}

}