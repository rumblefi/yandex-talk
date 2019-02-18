import React from 'react'
import {ReactComponent as Icon } from '../../assets/close.svg'
import {beautifyClassNames} from '../../helpers'
import './CloseIcon.scss'

const CloseIcon = ({className}) => (
	<Icon className={beautifyClassNames(['close-icon', className])} />
)

export default CloseIcon