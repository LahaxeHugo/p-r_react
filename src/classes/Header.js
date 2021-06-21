import React, { useState } from 'react'
import Menu from './menu/Menu'
import Logo from './menu/Logo'
import MenuButton from './menu/MenuButton'

function Header({ avis, menuActive, setMenuActive }) {
    let [data, setData] = useState(avis[0])
    
    function toggleMenu() {
        setMenuActive(!menuActive)
        if(menuActive !== true) {
            setData(avis[Math.floor(Math.random() * avis.length)])
        }
    }

    function closeMenu() {
        setMenuActive(false)
    }

    return(
        <header className="Header">
            <Logo />
            <MenuButton toggleMenu={toggleMenu} />
            <Menu data={data} closeMenu={closeMenu} />
        </header>
    )
}

export default Header