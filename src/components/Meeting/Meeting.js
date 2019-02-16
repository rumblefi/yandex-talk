import React from 'react'
import './Meeting.css'

export default class Meeting extends React.Component{

	render() {
		return (
			<div className="meeting">
				<div className="meeting__container">
					<div className="meeting__top">
						<div className="meeting__title">Новая встреча</div>
						<div className="meeting__close">
						</div>
					</div>
				</div>
			</div>
		)
	}

}