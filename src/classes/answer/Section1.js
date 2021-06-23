import React from 'react'
import Carousel from './Carousel'

function Section1() {
    return(
        <div className="Section1">
            <h2>VOUS GASPILLEZ ENVIRON</h2>
            <h1>5H00</h1>

            <div className="info-box">
                <p>Par semaine pour votre alimentation</p>
                <p>En comptant le temps que vous passez à faire vos courses, le nombre de personnes dans votre foyer et le temps que vous passez en cuisine. En moyenne, les gens comme vous y passent ...h</p>
            </div>

            <h3>Pendant ce temps là, vous auriez pu...</h3>
            <Carousel />

            <div className="button">Découvrir les plats</div>
        </div>
    )
}

export default Section1