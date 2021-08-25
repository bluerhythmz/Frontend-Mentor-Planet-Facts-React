import React from 'react'
import Burger from '../assets/icon-hamburger.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="header__title-box">
                <h1 className="header__title">The Planets</h1>
                <img src={Burger} alt="" className="header__burger" />
            </div>
        </header>
    )
}

export default Header
