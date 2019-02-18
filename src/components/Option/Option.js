import React from 'react'
import './Option.scss'
import UserPic from '../UserPic/UserPic'
import UserName from '../UserName/UserName'
import UserDivider from '../UserDivider/UserDivider'
import UserFloor from '../UserFloor/UserFloor'

const Option = props => {
    const {innerProps, innerRef, data} = props
    console.log(props)
    return (
        <div 
          ref={innerRef} 
          {...innerProps} 
          className="option"
          style={{
            backgroundColor: props.isSelected || props.isFocused ? '#FFF6F7F9' : '#fff'
          }}
        >
            <UserPic src={data.img}/>
            <UserName username={data.label}/>
            <UserDivider/>
            <UserFloor floor={data.floor}/>
        </div>
    )
}

export default Option