import React from 'react'
import BottomControls from './BottomControls'
import LeftControl from './LeftControl'
import RightControl from './RightControl'

function Controls({ data, current, updateSlide1, updateSlide2 }) {
    let leftHidden = false
    let rightHidden = false

    if(current === 0) leftHidden = true
    if(current === data.length-1) rightHidden = true


    return (
        <div className="Controls">
            <LeftControl updateSlide1={updateSlide1} hidden={leftHidden} />
            <BottomControls data={data} current={current} updateSlide2={updateSlide2} />
            <RightControl updateSlide1={updateSlide1} hidden={rightHidden}/>
        </div>
    )
}

export default Controls