import { React, useState } from 'react'

function Carousel() {
    let [position, setPosition] = useState(0)

    let data = [
        'Profiter d’un concert',
        'Faire de l’escalade',
        'Faire du jardinage'
    ]

    function update(e, i) {
        setPosition(i)
    }

    let controls = data.map((row, i) => {
        let active = position === i ? ' selected' : ''
        return <div key={i} className={'element'+active} onClick={e => {update(e, i)}}></div>
    })

    let slides = data.map((row, i) => {
        return (
            <div key={i} className={'slide slide-'+(i+1)} style={{left: (i*100) + '%'}}>
                <p>{row}</p>
            </div>
        )
    })

    return(
        <div className="Carousel">
            <div className="slides" style={{left: -(position*100) + '%'}}>
                {slides}
            </div>
            <div className="controls">
                {controls}
            </div>
        </div>
    )
}

export default Carousel