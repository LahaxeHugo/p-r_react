import React from 'react'
import Dot from './Dot'

function Cursor({ row, updateData }) {
    function updateCursor(e) {
        let parents = e.target.parentNode.parentNode.children
        for(let parent of parents) {
            parent.classList.remove('selected')
        }
        e.target.parentNode.classList.add('selected')
    }

    let dots = row.options.map((option, index) => {
        return <Dot id_question={row.id_question} option={option} index={index} key={index} updateData={updateData} updateCursor={updateCursor} />  
    })

    return (
        <div className="Cursor">
            {dots}
        </div>
    )
}

export default Cursor