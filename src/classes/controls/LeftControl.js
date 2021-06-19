import React from 'react'

function LeftControl({ updateSlide1 }) {
    return (
        <div className="element left" onClick={() => {updateSlide1('left')}}>Précédent</div>
    )
}

export default LeftControl