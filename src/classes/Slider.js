import React, { useState } from 'react'
import Controls from './controls/Controls'
import Slide from './Slide'
import SlideEnd from './SlideEnd'

function Slider({ data, formData, updateData, submitData }) {
    let [current, setCurrent] = useState(0)

    function updateSlide1(type) {
        if(type === 'left') {
            if((current - 1) >= 0) setCurrent(parseInt(current - 1))
        }
        else if(type === 'right') {
            if((current + 1) < (data.length+1)) setCurrent(parseInt(current + 1))
        }
    }

    let slides = data.map((row, index) => {
        return <Slide row={row} updateData={updateData} formData={formData} key={index} index={index+1} />
    })

    return (
        <div className="Slider">
            <div className="slides" style={{left: -((current)*100) + '%'}}>
                {slides}
                <SlideEnd index={slides.length} submitData={submitData} />
            </div>
            <Controls data={data} current={current} updateSlide1={updateSlide1} updateSlide2={setCurrent} />
        </div>
    )
}

export default Slider