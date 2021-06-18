import React from 'react'
import BottomControl from './BotttomControl'

function BottomControls({ data, current, updateSlide2 }) {
    let controls = data.map((element, index) => {
        let isCurrent = index === current
        return <BottomControl key={index} id={index} selected={isCurrent} updateSlide2={updateSlide2} />
    })

    return (
        <div className="bottom-controls">
            {controls}
        </div>
    )
}

export default BottomControls
