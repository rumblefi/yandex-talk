import React from 'react'
import './Field.scss'

const Field = ({type="text", placeholder}) => (
	<input type="text" placeholder={placeholder} className="field" />	
)

export default Field