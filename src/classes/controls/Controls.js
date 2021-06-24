import React from 'react'
import BottomControls from './BottomControls'
import LeftControl from './LeftControl'
import RightControl from './RightControl'
import SubmitControl from './SubmitControl'

function Controls({ data, current, updateSlide1, updateSlide2, submit }) {
    let leftHidden = false
    let rightHidden = false

    let s = ''
    if(current === 0) leftHidden = true
    if(current === data.length-1) {
        rightHidden = true
        s = <SubmitControl submit={submit} />
    }


    return (
        <div className="Controls">
            <LeftControl updateSlide1={updateSlide1} hidden={leftHidden} />
            <BottomControls data={data} current={current} updateSlide2={updateSlide2} hidden={rightHidden} />
            <RightControl updateSlide1={updateSlide1} hidden={rightHidden}/>
            {s}
        </div>
    )
}

export default Controls