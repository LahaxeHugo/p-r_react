import React from 'react'

function Dot({ id_question, option, index , updateData, updateCursor}) {
    function clickInput(e) {
        if(e.target.classList.contains('Dot')) {
            e.target.children[0].click()
        }
    }

    return (
        <div className="Dot" onClick={clickInput}>
            <input 
                type="radio"
                name={'dot-'+id_question}
                id={'dot-'+id_question+'-'+index}
                className="option type-dot" 
                data-id_question={id_question} 
                data-id_option={option.id_option} 
                onChange={e => {updateData('cursor', e);}}
                onClick={updateCursor}
            />
            <div className="dot"></div>
            <label htmlFor={'dot-'+id_question+'-'+index}>{option.name}</label>
        </div>
    )
}

export default Dot