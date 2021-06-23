import React from 'react'

function Menu() {
    return(
        <div className="Menu">
            <div className="logo"></div>
            <div className="nav">
                <div className="nav-left">
                    <div className="nav-item">
                        <a href="#">AU MENU</a>
                    </div>
                    <div className="nav-item">
                        <a href="#">OFFRIR</a>
                    </div>
                    <div className="nav-item">
                        <a href="#">CONCEPT</a>
                    </div>
                </div>
                <div className="nav-right">
                    <div className="nav-item">
                        <a href="#">QUESTIONS</a>
                    </div>
                    <div className="nav-item">
                        <a href="#">CONNEXION</a>
                    </div>
                    <div className="nav-item">
                        <a href="#">INSCRIPTION</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu