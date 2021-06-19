import React from 'react'

function Radio({ updateData, id_question, option, index, updateRadios }) {
    function clickInput(e) {
        if(e.target.classList.contains('Radio')) {
            e.target.children[0].click()
        }
    }

    return (
        <div className="Radio" onClick={clickInput}>
            <input 
                type="radio"
                name={'radio-'+id_question}
                id={'radio-'+id_question+'-'+index}
                className="option type-radio" 
                data-id_question={id_question} 
                data-id_option={option.id_option} 
                onChange={e => {updateData('radio', e);}}
                onClick={updateRadios}
            />
            <label htmlFor={'radio-'+id_question+'-'+index}>{option.name}</label>
        </div>
    )
}

export default Radio