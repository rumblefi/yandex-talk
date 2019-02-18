import React from 'react'
import './UserPic.scss'
import {beautifyClassNames} from '../../helpers'

const UserPic = ({className,src}) => (
	<img className={beautifyClassNames(['userpic', className])} src={src} alt=""/>	
)

export default UserPic