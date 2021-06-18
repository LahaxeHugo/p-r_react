import React from 'react'

function Checkbox({ updateData, id_question, option, index }) {
    return(
        <div key={index}>
            <input 
                type="checkbox" 
                id={'option-'+index} 
                className="option type-checkbox" 
                data-id_question={id_question} 
                data-id_option={option.id_option} 
                onChange={e => {updateData('checkbox', e)}}
            />
            <label htmlFor={'option-'+index}>{option.name}</label>
        </div>
    )
}

export default Checkbox