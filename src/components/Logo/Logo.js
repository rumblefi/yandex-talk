import React from 'react'
import logo from '../../assets/logo.svg'
import {Link} from "@reach/router";

const Logo = () => (
    <Link to="/" className="logo">
        <img src={logo} alt=""/>
    </Link>
)

export default Logo