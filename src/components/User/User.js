import React from 'react'
import UserPic from '../UserPic/UserPic'
import UserName from '../UserName/UserName'
import './User.scss'
import CloseIcon from '../CloseIcon/CloseIcon'
import {beautifyClassNames} from '../../helpers'


export default class User extends React.Component{

	handleClick = (userId) => {
		this.props.onUserClose(userId)
	}

	render() {
		const {className,userId,imgSrc,username} = this.props

		return(
			<div className={beautifyClassNames(['user', className])} >
				<UserPic src={imgSrc} />
				<UserName username={username} />
				<button onClick={ () => this.handleClick(userId) } type="button" className="user__close" >
					<CloseIcon/>
				</button>
			</div>		
		)

	}

}