import React, { useState } from 'react'
import Controls from './controls/Controls'
import Slide from './Slide'

function Slider({ data, formData, updateData }) {
    let [current, setCurrent] = useState(0)

    function updateSlide1(type) {
        if(type === 'left') {
            if((current - 1) >= 0) setCurrent(parseInt(current - 1))
        }
        else if(type === 'right') {
            if((current + 1) < data.length) setCurrent(parseInt(current + 1))
        }
    }

    let slides = data.map((row, index) => {
        let active = index === current
        return <Slide row={row} updateData={updateData} formData={formData} key={index} active={active} index={index+1} />
    })

    return (
        <div className="Slider">
            <div className="slides">
                {slides}    
            </div>
            <Controls data={data} current={current} updateSlide1={updateSlide1} updateSlide2={setCurrent} />
        </div>
    )
}

export default Slider