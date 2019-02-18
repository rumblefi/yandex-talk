import React from 'react'
import './SelectLabel.scss'
import Label from '../Label/Label'
import Select from '../Select/Select'
import User from '../User/User'
import {selectOptions} from '../Select/selectOptions'
import UsersHolder from '../UsersHolder/UsersHolder'

const SelectLabel = ({className, title, placeholder}) => (
    <Label className={className} title={title}>
		  <Select />
      <UsersHolder>
        <User className="users-holder__item" imgSrc={selectOptions[0].img} username={selectOptions[0].label} />
        <User className="users-holder__item" imgSrc={selectOptions[1].img} username={selectOptions[1].label} />
        <User className="users-holder__item" imgSrc={selectOptions[2].img} username={selectOptions[2].label} />
      </UsersHolder>
    </Label>
)

export default SelectLabel