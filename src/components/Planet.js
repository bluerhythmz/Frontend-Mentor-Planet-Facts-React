import React from 'react'
import Button from '../components/Button'
import SourceIcon from '../assets/icon-source.svg'
import { useEffect, useState } from 'react'
import MercuryPlanet from '../assets/planet-mercury.svg'

const Planet = ({location}) => {
    const [planet, setPlanet] = useState('')
    const [data, setData] = useState('')
    const [images, setImages] = useState('')
    const [text, setText] = useState('')
    
    useEffect(() => {
        /* const imagesArr = [{
            planet: "Mercury",
            images: {
                planet: MercuryPlanet
            }
        }] */
        if (location !== undefined && location.planetProps !== undefined) {
            setPlanet(location.planetProps.planet)
            setData(location.planetProps.data)
            setImages(location.planetProps.images.planet)
            setText(location.planetProps.text)
        } 
       
    }, [location])
    return (
        <>
        {planet && <main className="grid">
            <div className="info-tabs">
                <Button title="Overview" />
                <Button title="Structure" />
                <Button title="Surface" />
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
