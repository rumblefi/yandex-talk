import React from 'react'
import './SelectLabel.scss'
import Label from '../Label/Label'
import Select from '../Select/Select'

const SelectLabel = ({className, title, placeholder}) => (
    <Label className={className} title={title}>
		<Select />
    </Label>
)

export default SelectLabel