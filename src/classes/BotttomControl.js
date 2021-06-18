import React from 'react'

function BottomControl({ id, selected, updateSlide2 }) {
    let c = 'element'
    c+= selected ? ' selected' : ''

    return (
        <div className={c} onClick={() => {updateSlide2(id)}}></div>
    )
}

export default BottomControl
