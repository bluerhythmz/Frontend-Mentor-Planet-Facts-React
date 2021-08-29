import React from 'react'
import Burger from '../assets/icon-hamburger.svg'
import Planets from '../data.json'
import { NavLink, Route } from 'react-router-dom'
import Arrow from '../assets/icon-chevron.svg'
import { useState, useEffect } from 'react'
import Planet from './Planet'
import { useMediaQuery } from 'react-responsive'

import MercuryPlanet from '../assets/planet-mercury.svg'
import MercuryInternal from '../assets/planet-mercury-internal.svg'
import EarthPlanet from '../assets/planet-earth.svg'
import EarthInternal from '../assets/planet-earth-internal.svg'
import JupiterPlanet from '../assets/planet-jupiter.svg'
import JupiterInternal from '../assets/planet-jupiter-internal.svg'
import MarsPlanet from '../assets/planet-mars.svg'
import MarsInternal from '../assets/planet-mars-internal.svg'
import NeptuneInternal from '../assets/planet-neptune-internal.svg'
import NeptunePlanet from '../assets/planet-neptune.svg'
import SaturnPlanet from '../assets/planet-saturn.svg'
import SaturnInternal from '../assets/planet-saturn-internal.svg'
import UranusPlanet from '../assets/planet-uranus.svg'
import UranusInternal from '../assets/planet-uranus-internal.svg'
import VenusPlanet from '../assets/planet-venus.svg'
import VenusInternal from '../assets/planet-venus-internal.svg'


const Header = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    const notMobile = useMediaQuery({ query: `(min-width: 700px)` });
    useEffect(() => {
        if (notMobile) {
            setClicked(true)
        } else {
            setClicked(false)
        }
    }, [notMobile])
    const planetImages = [
        {
        planet: "Mercury",
        images: {
            geology: MercuryPlanet,
            internal: MercuryInternal
        }
    }]

    const getImages = (name) => {
        return  planetImages.filter(item => item.planet === name)
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
                    {Planets.map(planet => {
                        return (
                            <li key={planet.name} className="nav__li">
                            <NavLink to={{
                                pathname:`/${planet.name}`,
                                planetProps: {
                                    planet: planet.name,
                                    images: getImages(planet.name),
                                    color: planet.color,
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
                        )
                    } 
                    
                        
                    )}
                </ul>
            </nav>
        </header>
            <Route path="/" component={Planet} />
        </>
    )
}

export default Header
