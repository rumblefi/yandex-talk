import React from 'react'
import './Option.scss'
import UserPic from '../UserPic/UserPic'

const Option = props => {
    const {innerProps, innerRef,data} = props
    return (
		<div ref={innerRef} {...innerProps} className="option" >
            <img src={data.img} alt="" />
		</div>
        // <article ref={innerRef} {...innerProps} className="custom-option">
        //     {/* <h4>{props.data.artist}</h4>
        //     <div className="sub">{props.data.title}</div> */}
        //     <h1>11</h1>
        // </article>
    )
}

export default Option