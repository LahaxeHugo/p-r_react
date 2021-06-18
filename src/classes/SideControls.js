import React from 'react'

function SideControls({ updateSlide1 }) {
    return (
        <div className="side-controls">
            <div className="element left" onClick={() => {updateSlide1('left')}}></div>
            <div className="element right" onClick={() => {updateSlide1('right')}}></div>
        </div>
    )
}
export default SideControls