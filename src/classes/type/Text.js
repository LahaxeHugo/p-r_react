import React, { useState } from 'react'

function Text({ row, updateData, formData }) {
    // let value = formData[row.id_question] === undefined ? '' : formData[row.id_question]
    // console.log(value);

    return (
        <input 
            className="option type-text" 
            data-id_question={row.id_question} 
            onChange={e => {updateData('text', e)}} 
            // value={value}
        />
    )
}

export default Text