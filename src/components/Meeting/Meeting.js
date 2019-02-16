import React from 'react'
import './Meeting.scss'
import CircleButton from '../CircleButton/CircleButton'
import CloseIcon from '../CloseIcon/CloseIcon'

export default class Meeting extends React.Component{

	render() {
		return (
			<div className="meeting">
				<div className="meeting__container">
					<div className="meeting__top">
						<div className="meeting__title">Новая встреча</div>
						<CircleButton className="meeting__close" >
							<CloseIcon />
						</CircleButton>
					</div>
				</div>
			</div>
		)
	}

}