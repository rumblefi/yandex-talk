import React from 'react'
import UserPic from '../UserPic/UserPic'
import UserName from '../UserName/UserName'
import './User.scss'
import CloseIcon from '../CloseIcon/CloseIcon'
import {beautifyClassNames} from '../../helpers'

const User = ({className,imgSrc,username}) => (
	<div className={beautifyClassNames(['user', className])} >
		<UserPic src={imgSrc} />
		<UserName username={username} />
		<CloseIcon className="user__close" />
	</div>
)

export default User