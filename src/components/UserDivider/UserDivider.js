import React from 'react'
import './UserDivider.scss'
import {beautifyClassNames} from '../../helpers'

const UserDivider = ({className}) => (
	<div className={beautifyClassNames(['user-divider', className])}>—</div>
)

export default UserDivider