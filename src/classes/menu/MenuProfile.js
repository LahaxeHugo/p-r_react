import React from 'react'

function MenuProfile({ data }) {
    return (
        <div className="MenuProfile">
            <div className="MenuProfile-image"></div>
            <div className="MenuProfile-info">
                <p className="MenuProfile-name">{data.name}</p>
                <p className="MenuProfile-sub">{data.sub}</p>
            </div>
        </div>
    )
}

export default MenuProfile