import React from 'react'

function Select({ row, updateData }) {
    let options = row.options.map((option, index) => {
        return <option value={option.id_option} key={index}>{option.name}</option>
    })

    return (
        <select 
            className="Select" 
            data-id_question={row.id_question}
            onChange={e => {updateData('select', e)}} 
        >
            {options}
        </select>
    )
}

export default Select