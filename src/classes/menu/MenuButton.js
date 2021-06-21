import React from 'react'

function MenuButton({ toggleMenu }) {
    return (
        <div className="MenuButton" onClick={toggleMenu}>
            <div></div>
            <div></div>
        </div>
    )
}

export default MenuButton