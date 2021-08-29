import React from 'react'
import Button from '../components/Button'
import SourceIcon from '../assets/icon-source.svg'
import { useEffect, useState } from 'react'

const Planet = ({location}) => {
    const [planet, setPlanet] = useState('')
    const [data, setData] = useState('')
    const [images, setImages] = useState('')
    const [image, setImage] = useState('')
    const [geologyImage, setGeologyImage] = useState('')
    const [text, setText] = useState('')
    const [textItem, setTextItem] = useState('')
    const [color, setColor] = useState('')
    const [activeButton, setActiveButton] = useState('overview')
    
    useEffect(() => {
        if (location !== undefined && location.planetProps !== undefined) {
            setPlanet(location.planetProps.planet)
            setData(location.planetProps.data)
            setImages(location.planetProps.images)
            setImage(location.planetProps.images[0].images.planet)
            setGeologyImage('')
            setText(location.planetProps.text)
            setTextItem('')
            setColor(location.planetProps.color)
            setActiveButton('overview')
        } 
    }, [location, planet])

    const handleClick = (button, value) => {
        setTextItem(value)
        setActiveButton(button)
        switch (button)  {
            case "structure":
                setImage(images[0].images.internal)
                setGeologyImage("")
                break
            case "geology":
                setImage(images[0].images.planet)
                setGeologyImage(images[0].images.geology)
                break
            default:
                setImage(images[0].images.planet)
                setGeologyImage("")
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
                <img src={geologyImage} alt="" className="img__geology" />
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
