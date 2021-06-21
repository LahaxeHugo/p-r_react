import React, { useState } from 'react'

function Intro() {
    let [active, setActive] = useState(true)
    
    function hide() {
        setActive(false)    
    }

    let a = active ? ' active' : ''


    return(
        <div className={'Intro'+a}>
            <div className="Intro-left">
                <h2>De bons petits plats, <br />le casse-tête en moins !</h2>
                <p className="text-1">Le choix des repas, la sélection des ingrédients, la cuisine, le ménage...  Toutes ces activités peuvent prendre beaucoup de temps dans votre foyer.</p>
                <p className="text-2">Apprenez-en plus sur vos habitudes et découvrez <b>comment libérer du temps</b> pour ce qui compte vraiment, sans négliger votre alimentation.</p>
                <div className="button" onClick={hide}>DÉCOUVRIR</div>
            </div>
            <div className="Intro-right"></div>
        </div>
    )
}

export default Intro
