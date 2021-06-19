import React from 'react'
import BottomControls from './BottomControls'
import LeftControl from './LeftControl'
import RightControl from './RightControl'

function Controls({ data, current, updateSlide1, updateSlide2 }) {
    return (
        <div className="Controls">
            <LeftControl updateSlide1={updateSlide1} />
            <BottomControls data={data} current={current} updateSlide2={updateSlide2} />
            <RightControl updateSlide1={updateSlide1} />
        </div>
    )
}

export default Controls