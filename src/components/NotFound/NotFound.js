import React from 'react'
import './NotFound.scss'
import Button from '../Button/Button'

const NotFound = () => (
    <div className="page not-found">
        <span className="not-found__title" >Такой страницы не существует</span>
        <Button
            type="link"
            text='Перейти на Главную'
            link="/"
            className="button--1"/>
    </div>
)

export default NotFound