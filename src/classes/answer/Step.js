import React from 'react'

function Step({ row, index }) {
    let options = row.options.map((option, i) => {
        return (
            <div className="option" key={i}>
                <div className={'opt option-'+index+'-'+(i+1)}></div>
                <p>{option}</p>
            </div>
        )
    })

    return(
        <div className="Step">
            <div className="left-column">
                <div className={'image-'+index}></div>
            </div>
            <div className="right-column">
                <p className="number">{index}</p>
                <h4>{row.title}</h4>
                <div className="options">
                    {options}
                </div>
            </div>
        </div>
    )
}

export default Step