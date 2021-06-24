import { React, useState } from 'react'

function Carousel() {
    let [position, setPosition] = useState(0)
    
    let data = [
        'Balade à vélo',
        'Jouer à un jeu de société',
        'Balade en Canoë',
        'Voir un film au cinéma',
        'Balade son chien',
        'Aller au Spa',
        'Jouer à Mario Kart',
        'Balade sur les quais',
        'Profiter sur un rooftop',
        'Faire son potager',
        'Profiter voir un concert',
        'Faire de l\'escalade'
    ]
    
    function getRandom(arr, n) {
        var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
        if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }
    
    
    let arr = []
    for (let index = 0; index < data.length; index++) arr.push(index)
    
    let [rand] = useState(getRandom(arr, 3))
    
    let controls = rand.map((row, i) => {
        let active = position === i ? ' selected' : ''
        return <div key={i} className={'element'+active} onClick={e => {update(e, i)}}></div>
    })

    function update(e, i) {
        setPosition(i)
    }
    
    let slides = rand.map((id, i) => {
        return (
            <div 
                key={i} 
                className={'slide slide-'+(i+1)} 
                style={{
                    left: (i*100) + '%',
                    backgroundImage: 'url(http://appcompet.herokuapp.com/img/slider/'+(id+1)+'.jpg)'
                }}
            >
                <p>{data[id]}</p>
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