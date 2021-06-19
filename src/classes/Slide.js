import React from 'react'

import Text from './type/Text'
import Checkboxs from './type/Checkboxs'
import Select from './type/Select'
import Radios from './type/Radios'
import Cursor from './type/Cursor'

 function Slide({ row, updateData, formData, active, index }) {
    let html = ''
    switch(row.type) {
        case 'Cursor':
            html = <Cursor row={row} updateData={updateData} />
            break
        case 'select':
            html = <Select row={row} updateData={updateData} />
            break
        case 'checkbox':
            html = <Checkboxs row={row} updateData={updateData} />
            break
        case 'radio':
            html = <Radios row={row} updateData={updateData} />
            break;
        case 'text':
        default:
            html = <Text row={row} updateData={updateData} />

    }

    let a = active ? ' active' : ''

    return (
         <div className={'Slide'+a}>
             <h2>Question <span className="number">{index}</span></h2>
             <h3>{row.name}</h3>
             <div className="wrapper-field">{html}</div>
         </div>
    )
 }

 export default Slide