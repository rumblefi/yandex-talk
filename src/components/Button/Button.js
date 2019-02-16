import React from 'react'
import './Button.scss'
import {Link} from "@reach/router"

const Button = ({type, text, link, modificator, disabled}) => {

    const clazz = `button ${modificator}`

    if (type === 'submit') {
        return <button type="submit" className={clazz} disabled={disabled}>{text}</button>
    } else if (type === 'link') {
        return <Link to={link} className={clazz} disabled={disabled}>{text}</Link>
    } else {
        return <button type="button" className={clazz} disabled={disabled}>{text}</button>
    }

}

export default Button