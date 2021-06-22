import React from 'react'

function SubmitControl({ submit }) {
    return (
        <div className="element submit" onClick={submit}>
            <span>Valider</span>
        </div>
    )
}

export default SubmitControl