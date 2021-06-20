import React from 'react'

function LeftControl({ updateSlide1, hidden }) {
    let h = hidden ? ' hidden' : '' 

    return (
        <div className={'element left'+h} onClick={() => {updateSlide1('left')}}>Précédent</div>
    )
}

export default LeftControl