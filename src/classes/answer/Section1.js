import React from 'react'
import Carousel from './Carousel'

function Section1({ formData }) {
    let points = 0
    for(let i in formData) {
        // console.log(i, '1');
        // console.log(formData[3]);
      if([2, 3, 4].includes(parseInt(i))) {
        for(let j in formData[i].options) {
        //   console.log(j);
          switch(parseInt(j)) {
            case 3:
            case 14:
            case 17:
              points += 1
              break
            
            case 4:
            case 15:
            case 18:
              points += 2
              break
            case 5:
            case 16:
            case 19:
              points += 3
              break
            case 20:
              points += 4
              break
          }
        }
      }
    }

    return(
        <div className="Section1">
            <h2>VOUS GASPILLEZ ENVIRON</h2>
            <h1>{points}H00</h1>

            <div className="ii">
                <div className="info-box">
                    <p>Par semaine pour votre alimentation</p>
                    <p>En comptant le temps que vous passez à faire vos courses, le nombre de personnes dans votre foyer et le temps que vous passez en cuisine. En moyenne, les gens comme vous y passent ...h</p>
                </div>
            </div>

            <h3>Pendant ce temps là, vous auriez pu...</h3>
            <Carousel />

            <div className="button">Découvrir les plats</div>
        </div>
    )
}

export default Section1