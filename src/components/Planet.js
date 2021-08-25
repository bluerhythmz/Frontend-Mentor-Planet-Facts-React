import React from 'react'
import Button from '../components/Button'
import Mercury from '../assets/planet-mercury.svg'
import SourceIcon from '../assets/icon-source.svg'

const Planet = () => {
    return (
        <main className="grid">
            <div className="info-tabs">
                <Button title="Overview" />
                <Button title="Structure" />
                <Button title="Surface" />
            </div>
            <div className="img-wrapper">
                <img src={Mercury} alt="" className="img" />
            </div>
            <div className="text">
                <h2 className="text__title">Mercury</h2>
                <div className="text__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti commodi totam atque eveniet eaque distinctio veniam sequi neque nihil dolorum quibusdam vero consequuntur corporis quia, cumque, voluptas labore quaerat!</div>
                <span className="text__source">
                    Source: 
                     <a href="#" className="source">
                          Wikipedia
                         <img src={SourceIcon} alt="" />
                    </a>
                </span>
            </div>
        </main>
    )
}

export default Planet
