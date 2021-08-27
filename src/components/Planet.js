import React from 'react'
import Button from '../components/Button'
import SourceIcon from '../assets/icon-source.svg'
import { useEffect, useState } from 'react'
import MercuryPlanet from '../assets/planet-mercury.svg'
import EarthPlanet from '../assets/planet-earth.svg'
import JupiterPlanet from '../assets/planet-jupiter.svg'
import MarsPlanet from '../assets/planet-mars.svg'
import NeptunePlanet from '../assets/planet-neptune.svg'
import SaturnPlanet from '../assets/planet-saturn.svg'
import UranusPlanet from '../assets/planet-uranus.svg'
import VenusPlanet from '../assets/planet-venus.svg'

const Planet = ({location}) => {
    const [planet, setPlanet] = useState('')
    const [data, setData] = useState('')
    const [images, setImages] = useState('')
    const [text, setText] = useState('')
    
    useEffect(() => {
        const imagesArr = [{
            planet: "Mercury",
            images: {
                planet: MercuryPlanet
            }
        },
            {
            planet: "Earth",
            images: {
                planet: EarthPlanet
            }
        },
            {
            planet: "Jupiter",
            images: {
                planet: JupiterPlanet
            }
        },
            {
                planet: "Mars",
                images: {
                    planet: MarsPlanet
                }
            },
            {
                planet: "Neptune",
                images: {
                    planet: NeptunePlanet
                }
            },
            {
                planet: "Saturn",
                images: {
                    planet: SaturnPlanet
                }
            },
            {
                planet: "Uranus",
                images: {
                    planet: UranusPlanet
                }
            },
            {
                planet: "Venus",
                images: {
                    planet: VenusPlanet
                }
            }
        ]
        if (location !== undefined && location.planetProps !== undefined) {
            setPlanet(location.planetProps.planet)
            setData(location.planetProps.data)
            const selectedPlanet = imagesArr.filter(item => item.planet === location.planetProps.planet)
            setImages(selectedPlanet[0].images.planet)
            setText(location.planetProps.text)
        } 
       
    }, [location, planet])
    return (
        <>
        {planet && <main className="grid">
            <div className="info-tabs">
                <Button num="1" title="Overview" />
                <Button num="2" title="Structure" />
                <Button num="3" title="Surface" />
            </div>
            <div className="img-wrapper">
                <img src={images} alt="" className="img" />
            </div>
            <div className="text">
                <h2 className="text__title">{planet}</h2>
                <div className="text__description">{text.overview.content}</div>
                <span className="text__source">
                    Source: 
                     <a href={text.overview.source} className="source">
                          Wikipedia
                         <img src={SourceIcon} alt="link-icon" className="source__img"/>
                    </a>
                </span>
            </div>
            <div className="data">
                <div className="data__item">
                    <div className="data__title">Rotation Time</div>
                    <div className="data__stat">{data.rotation}</div>
                </div>
                <div className="data__item">
                    <div className="data__title">Revolution Time</div>
                    <div className="data__stat">{data.revolution}</div>
                </div>
                <div className="data__item">
                    <div className="data__title">Radius</div>
                    <div className="data__stat">{data.radius}</div>
                </div>
                <div className="data__item">
                    <div className="data__title">Average Temp</div>
                    <div className="data__stat">{data.temperature}</div>
                </div>
            </div>
        </main>
        }
        </>
    )
}

export default Planet
