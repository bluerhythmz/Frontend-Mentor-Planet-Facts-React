import React from 'react'
import Burger from '../assets/icon-hamburger.svg'
import Planets from '../data.json'

const Header = () => {
    console.log(Planets[0].name)
    return (
        <header className="header">
            <div className="header__title-box">
                <h1 className="header__title">The Planets</h1>
                <img src={Burger} alt="" className="header__burger" />
            </div>
            <nav className="nav">
                <ul>
                    {Planets.map(planet => (
                        <li>{planet.name}</li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header
