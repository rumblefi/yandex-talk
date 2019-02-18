import React from 'react'
import './Option.scss'
import UserPic from '../UserPic/UserPic'
import UserName from '../UserName/UserName'
import UserDivider from '../UserDivider/UserDivider'
import UserFloor from '../UserFloor/UserFloor'

export default class Option extends React.Component {
  
  render() {
      const {innerProps, innerRef, data} = this.props
      
        return (
            <div
                ref={innerRef}
                {...innerProps}
                className="option"
                style={{
                backgroundColor: this.props.isSelected || this.props.isFocused
                    ? '#FFF6F7F9'
                    : '#fff'
            }}>
                <UserPic src={data.img}/>
                <UserName username={data.label}/>
                <UserDivider/>
                <UserFloor floor={data.floor}/>
            </div>
        )
    }

}