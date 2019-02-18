import React from 'react'
import './UserFloor.scss'
import {beautifyClassNames} from '../../helpers'

const UserFloor = ({className,floor}) => (
	<div className={beautifyClassNames(['user-floor', className])}>{floor}</div>
)

export default UserFloor