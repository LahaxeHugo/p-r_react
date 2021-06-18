import React, { useState } from 'react'
import BottomControls from './BottomControls'
import SideControls from './SideControls'
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
        return <Slide row={row} updateData={updateData} formData={formData} key={index} active={active} />
    })

    return (
        <div className="Slider">
            <div className="slides">
                {slides}
                {/* <Slide row={data[current]} updateData={updateData} formData={formData} /> */}
            </div>
            <SideControls updateSlide1={updateSlide1} />
            <BottomControls data={data} current={current} updateSlide2={setCurrent} />
        </div>
    )
}

export default Slider