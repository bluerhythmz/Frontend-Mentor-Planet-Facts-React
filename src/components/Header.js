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
import MercuryGeology from '../assets/geology-mercury.png'
import EarthPlanet from '../assets/planet-earth.svg'
import EarthInternal from '../assets/planet-earth-internal.svg'
import EarthGeology from '../assets/geology-earth.png'
import JupiterPlanet from '../assets/planet-jupiter.svg'
import JupiterInternal from '../assets/planet-jupiter-internal.svg'
import JupiterGeology from '../assets/geology-jupiter.png'
import MarsPlanet from '../assets/planet-mars.svg'
import MarsInternal from '../assets/planet-mars-internal.svg'
import MarsGeology from '../assets/geology-mars.png'
import NeptuneInternal from '../assets/planet-neptune-internal.svg'
import NeptunePlanet from '../assets/planet-neptune.svg'
import NeptuneGeology from '../assets/geology-neptune.png'
import SaturnPlanet from '../assets/planet-saturn.svg'
import SaturnInternal from '../assets/planet-saturn-internal.svg'
import SaturnGeology from '../assets/geology-saturn.png'
import UranusPlanet from '../assets/planet-uranus.svg'
import UranusInternal from '../assets/planet-uranus-internal.svg'
import UranusGeology from '../assets/geology-uranus.png'
import VenusPlanet from '../assets/planet-venus.svg'
import VenusInternal from '../assets/planet-venus-internal.svg'
import VenusGeology from '../assets/geology-venus.png'


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
            planet: MercuryPlanet,
            internal: MercuryInternal,
            geology: MercuryGeology
        }
    },
    {
        planet: "Earth",
        images: {
            planet: EarthPlanet,
            internal: EarthInternal,
            geology: EarthGeology
        }
    },
    {
        planet: "Mars",
        images: {
            planet: MarsPlanet,
            internal: MarsInternal,
            geology: MarsGeology
        }
    },
    {
        planet: "Neptune",
        images: {
            planet: NeptunePlanet,
            internal: NeptuneInternal,
            geology: NeptuneGeology
        }
    },
    {
        planet: "Jupiter",
        images: {
            planet: JupiterPlanet,
            internal: JupiterInternal,
            geology: JupiterGeology
        }
    },
    {
        planet: "Saturn",
        images: {
            planet: SaturnPlanet,
            internal: SaturnInternal,
            geology: SaturnGeology
        }
    },
    {
        planet: "Uranus",
        images: {
            planet: UranusPlanet,
            internal: UranusInternal,
            geology: UranusGeology
        }
    },
    {
        planet: "Venus",
        images: {
            planet: VenusPlanet,
            internal: VenusInternal,
            geology: VenusGeology
        }
    }
]

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
                            {!notMobile && ( <div className="circle" style={{backgroundColor: planet.color}}></div> )}
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
