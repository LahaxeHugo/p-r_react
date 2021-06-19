import React from 'react'

function Checkbox({ updateData, id_question, option, index }) {
    function clickInput(e) {
        if(e.target.classList.contains('Checkbox')) {
            e.target.children[0].click()
        }
    }

    function updateCheckbox(e) {
        let parent = e.target.parentNode
        if(parent.classList.contains('selected')) {
            parent.classList.remove('selected')
        } else {
            parent.classList.add('selected')
        }
    }

    return(
        <div className="Checkbox" onClick={clickInput}>
            <input 
                type="checkbox" 
                id={'checkbox-'+id_question+'-'+index} 
                className="option type-checkbox" 
                data-id_question={id_question} 
                data-id_option={option.id_option} 
                onChange={e => {updateData('checkbox', e)}}
                onClick={updateCheckbox}
            />
            <label htmlFor={'checkbox-'+id_question+'-'+index}>{option.name}</label>
        </div>
    )
}

export default Checkbox