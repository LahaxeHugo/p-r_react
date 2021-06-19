import React from 'react'

function RightControl({ updateSlide1 }) {
    return (
        <div className="element right" onClick={() => {updateSlide1('right')}}>Suivant</div>
    )
}

export default RightControl