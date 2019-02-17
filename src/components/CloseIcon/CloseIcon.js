import React from 'react'
import {ReactComponent as Icon } from '../../assets/close.svg'
import {beautifyClassNames} from '../../helpers'

const CloseIcon = ({className}) => (
	<Icon className={beautifyClassNames(['icon', className])} />
)

export default CloseIcon