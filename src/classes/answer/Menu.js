import React from 'react'

function Menu() {
    return(
        <div className="Menu">
            <div className="Menu-mobile">
                <div className="button">
                    <div></div>
                    <div></div>
                </div>
                <div className="logo"></div>
            </div>
            <div className="Menu-desktop">
                <div className="logo"></div>
                <div className="nav">
                    <div className="nav-left">
                        <div className="nav-item">
                            <a href="https://p-r-react.vercel.app/">AU MENU</a>
                        </div>
                        <div className="nav-item">
                            <a href="https://p-r-react.vercel.app/">OFFRIR</a>
                        </div>
                        <div className="nav-item">
                            <a href="https://p-r-react.vercel.app/">CONCEPT</a>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="nav-item">
                            <a href="https://p-r-react.vercel.app/">QUESTIONS</a>
                        </div>
                        <div className="nav-item">
                            <a href="https://p-r-react.vercel.app/">CONNEXION</a>
                        </div>
                        <div className="nav-item">
                            <a href="https://p-r-react.vercel.app/">INSCRIPTION</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu