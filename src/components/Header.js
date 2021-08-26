import React from 'react'
import Burger from '../assets/icon-hamburger.svg'
import Planets from '../data.json'
import { NavLink, Route } from 'react-router-dom'
import Arrow from '../assets/icon-chevron.svg'
import { useState } from 'react'
import Planet from './Planet'


const Header = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <>
        <header className="header">
            <div className="header__title-box">
                <h1 className="header__title">The Planets</h1>
                <img src={Burger} alt="" onClick={handleClick} className="header__burger" />
            </div>
            <nav className="nav" style={clicked ? {display: "block"} : {display: "none"}}>
                <ul className="nav__links">
                    {Planets.map(planet => (
                        <li key={planet.name} className="nav__li">
                            <NavLink to={{
                                pathname:'/',
                                planetProps: {
                                    planet: planet.name,
                                    images: planet.images,
                                    text: {
                                        overview: planet.overview,
                                        structure: planet.structure,
                                        geology: planet.geology
                                    },
                                    data: {
                                        rotation: planet.rotation,
                                        revolution: planet.revolution,
                                        radius: planet.radius,
                                        temperature: planet.temperature
                                    }
                                }
                            }}
                              className="nav__link">{planet.name}</NavLink>
                            <img src={Arrow} alt="" className="nav__arrow" />
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
            <Route path="/" component={Planet} />
        </>
    )
}

export default Header
