import React from 'react'
import MenuProfile from './MenuProfile'

function Menu({ data, closeMenu }) {
    return(
        <>
            {/* <div className="Menu-overlay" onClick={closeMenu}></div> */}
            <div className="Menu">
                <div className="Menu-bckg"></div>
                <div className="Menu-sub">
                    <p className="Menu-question">{data.question}</p>
                    <div className="Menu-bottom">
                        <div className="Menu-symbol-1"></div>
                        <p className="Menu-response">{data.response}</p>
                        <div className="Menu-symbol-2"></div>
                        <MenuProfile data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu