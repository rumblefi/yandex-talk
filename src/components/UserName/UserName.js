import React from 'react'
import './UserName.scss'
import {beautifyClassNames} from '../../helpers'

const UserName = ({className,username}) => (
	<div className={beautifyClassNames(['username', className])}>{username}</div>
)

export default UserName