import React from 'react'

function MenuButton({ toggleMenu }) {

    function toggleButton(e) {
        let parent = e.target
        if(!e.target.classList.contains('MenuButton')) {
            parent = parent.parentNode
        } 
        if(parent.classList.contains('active')) {
            parent.classList.remove('active')
        } else {
            parent.classList.add('active')
        }
        toggleMenu()
    }

    return (
        <div className="MenuButton" onClick={toggleButton}>
            <div></div>
            <div></div>
        </div>
    )
}

export default MenuButton