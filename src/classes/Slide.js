import React from 'react'

import Text from './type/Text'
import Checkboxs from './type/Checkboxs'
import Select from './type/Select'
import Radios from './type/Radios'
import Cursor from './type/Cursor'
import Text2 from './type/Text2'

 function Slide({ row, updateData, index }) {
    let html = ''
    switch(row.type) {
        case 'cursor':
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
        case 'text2':
            html = <Text2 row={row} updateData={updateData} /> 
            break;
        case 'text':
        default:
            html = <Text row={row} updateData={updateData} />

    }


    return (
         <div className="Slide" style={{left: ((index-1)*100) + '%'}}>
             <h2>Question <span className="number">{index}</span></h2>
             <h3>{row.name}</h3>
             <div className="wrapper-field">{html}</div>
         </div>
    )
 }

 export default Slide