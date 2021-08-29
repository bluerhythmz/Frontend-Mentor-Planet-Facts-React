import React from 'react'
import Button from '../components/Button'
import SourceIcon from '../assets/icon-source.svg'
import { useEffect, useState } from 'react'
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

const Planet = ({location}) => {
    const [planet, setPlanet] = useState('')
    const [data, setData] = useState('')
    const [images, setImages] = useState('')
    const [image, setImage] = useState('')
    const [text, setText] = useState('')
    const [textItem, setTextItem] = useState('')
    const [color, setColor] = useState('')
    const [activeButton, setActiveButton] = useState('')
    
    useEffect(() => {
        const imagesArr = [{
            planet: "Mercury",
            images: {
                planet: MercuryPlanet,
                inetrnal: MercuryInternal
            }
        },
            {
            planet: "Earth",
            images: {
                planet: EarthPlanet,
                internal: EarthInternal
            }
        },
            {
            planet: "Jupiter",
            images: {
                planet: JupiterPlanet,
                internal: JupiterInternal
            }
        },
            {
                planet: "Mars",
                images: {
                    planet: MarsPlanet,
                    internal: MarsInternal
                }
            },
            {
                planet: "Neptune",
                images: {
                    planet: NeptunePlanet,
                    internal: NeptuneInternal
                }
            },
            {
                planet: "Saturn",
                images: {
                    planet: SaturnPlanet,
                    internal: SaturnInternal
                }
            },
            {
                planet: "Uranus",
                images: {
                    planet: UranusPlanet,
                    internal: UranusInternal
                }
            },
            {
                planet: "Venus",
                images: {
                    planet: VenusPlanet,
                    internal: VenusInternal
                }
            }
        ]
        if (location !== undefined && location.planetProps !== undefined) {
            setPlanet(location.planetProps.planet)
            setData(location.planetProps.data)
            /* const selectedPlanet = imagesArr.filter(item => item.planet === location.planetProps.planet)
            setImages(selectedPlanet[0].images.planet) */
            setImages(location.planetProps.images)
            /* setImage(location.planetProps.images.planet) */
            setText(location.planetProps.text)
            setTextItem('')
            setColor(location.planetProps.color)
            console.log(location.planetProps.images)
        } 
    }, [location, planet])

    const handleClick = (button, value) => {
        setTextItem(value)
        setActiveButton(button)
        if (button === "structure") {
            setImage(image.internal)
        }
    }
    return (
        <>
        {planet && <main className="grid">
            <div className="info-tabs">
                {text && Object.entries(text).map(([key, value], index) => (
                    <Button handleClick={handleClick} key={key} value={value} num={index + 1} title={key} activeButton={activeButton} color={color} />
                ))}
            </div>
            <div className="img-wrapper">
                <img src={image} alt="" className="img" />
            </div>
            <div className="text">
                <h2 className="text__title">{planet}</h2>
                <div className="text__description">{textItem ? textItem.content : text.overview.content}</div>
                <span className="text__source">
                    Source: 
                     <a href={textItem ? textItem.source : text.overview.source} className="source">
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
