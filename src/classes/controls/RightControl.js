import React from 'react'

function RightControl({ updateSlide1, hidden }) {
    let h = hidden ? ' hidden' : ''

    return (
        <div className={'element right'+h} onClick={() => {updateSlide1('right')}}>Suivant</div>
    )
}

export default RightControl