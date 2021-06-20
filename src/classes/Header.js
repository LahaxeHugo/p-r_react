import React, { useState } from 'react'
import Menu from './menu/Menu'
import Logo from './menu/Logo'
import MenuButton from './menu/MenuButton'

function Header({ avis }) {
    let [active, setActive] = useState(false)
    let [data, setData] = useState(avis[0])
    
    
    function toggleMenu() {
        setActive(!active)
        if(active !== true) {
            setData(avis[Math.floor(Math.random() * avis.length)])
        }
    }
    function closeMenu() {
        setActive(false)
    }

    let a = active ? ' active' : ''

    return(
        <header className={'Header'+a}>
            <Logo />
            <MenuButton toggleMenu={toggleMenu} />
            <Menu data={data} closeMenu={closeMenu} />
        </header>
    )
}

export default Header