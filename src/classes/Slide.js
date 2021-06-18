import React from 'react'

import Text from './type/Text'
import Checkbox from './type/Checkbox'

 function Slide({ row, updateData, formData, active }) {
    let html = ''
    switch(row.type) {
        case 'checkbox':
            html = row.options.map((option, index) => {
                return <Checkbox id_question={row.id_question} option={option} index={index} key={index} updateData={updateData} />
            })
            break;
        case 'text':
        default:
            html = <Text row={row} updateData={updateData} formData={formData} />

    }

    let a = active ? ' active' : ''

    return (
         <div className={'Slide'+a}>
             <p>{row.name}</p>
             <div>{html}</div>
         </div>
    )
 }

 export default Slide