import React from 'react'

function Text2({ row, updateData }) {
    function focusin(e) {
        e.target.parentNode.classList.add('active')
    }

    function focusout(e) {
        if(e.target.value.length === 0) 
            e.target.parentNode.classList.remove('active')
    }

    let options = row.options.map((option, index) => {
        return (
            <div className="text2-wrapper" key={index}>
                <label htmlFor={'text2-'+row.id_question+'-'+index}>{option.name}</label>
                <input 
                    type="number" 
                    min="0" 
                    id={'text2-'+row.id_question+'-'+index} 
                    onFocus={focusin} 
                    onBlur={focusout} 
                    onChange={e => {updateData('text2', e)}}
                    data-id_question={row.id_question} 
                    data-id_option={option.id_option} 
                />
            </div>
        )
    })

    return (
        <div className="Text2">
            {options}
        </div>
    )
}

export default Text2