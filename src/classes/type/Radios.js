import React from 'react'
import Radio from './Radio'

function Radios({ row, updateData }) {
    function updateRadios(e) {
        let parents = e.target.parentNode.parentNode.parentNode.children
        for(let parent of parents) {
            parent.classList.remove('selected')
        }
        e.target.parentNode.parentNode.classList.add('selected')
    }

    let radios = row.options.map((option, index) => {
        return <Radio id_question={row.id_question} option={option} index={index} key={index} updateData={updateData} updateRadios={updateRadios} />
    })

    return (
        <div className="Radios">
            {radios}
        </div>
    )
}

export default Radios