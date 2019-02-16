import React from 'react'
import Logo from '../Logo/Logo'
import './Header.scss'
import Button from '../Button/Button'

const Header = () => (
    <header className="header">
        <Logo/>
        <Button
            type="link"
            text='Создать встречу'
            link="/meeting"
            modificator="button--1"/>
    </header>
)

export default Header