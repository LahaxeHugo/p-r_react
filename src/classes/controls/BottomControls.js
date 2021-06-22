import React from 'react'
import BottomControl from './BotttomControl'

function BottomControls({ data, current, updateSlide2 }) {
    
    let controls = []
    for(let i = 0; i < (data.length); i++) {
        let isCurrent = i === current
        controls.push(<BottomControl key={i} id={i} selected={isCurrent} updateSlide2={updateSlide2} />)
    }

    return (
        <div className="bottom-controls">
            {controls}
        </div>
    )
}

export default BottomControls
