import React from 'react'
import Checkbox from './Checkbox'

function Checkboxs({ row, updateData }) {
    let checkboxs = row.options.map((option, index) => {
        return <Checkbox id_question={row.id_question} option={option} index={index} key={index} updateData={updateData} />
    })

    return (
        <div className="Checkboxs">
            {checkboxs}
        </div>
    )
}

export default Checkboxs