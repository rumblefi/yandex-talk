import React from 'react'
import './Label.scss'
import {beautifyClassNames} from '../../helpers'

const Label = ({chilren, className}) => {

    return (
        <label
            className={ beautifyClassNames(['label', className]) }>
            <span className="label__title">Тема</span>
            {chilren}
        </label>
    )

}

export default Label