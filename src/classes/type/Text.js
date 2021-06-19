import React from 'react'

function Text({ row, updateData }) {
    return (
        <input 
            className="option type-text" 
            data-id_question={row.id_question} 
            onChange={e => {updateData('text', e)}} 
        />
    )
}

export default Text