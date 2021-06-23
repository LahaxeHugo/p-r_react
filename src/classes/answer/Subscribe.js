import React from 'react'

function Subscribe() {
    function focusin(e) {
        e.target.parentNode.classList.add('active')
    }

    function focusout(e) {
        if(e.target.value.length === 0) 
            e.target.parentNode.classList.remove('active')
    }

    return(
        <div className="Subscribe">
            <div className="left">
                <div className="image"></div>
            </div>
            <div className="right">
                <h3>Testez et gagnez 15% sur votre première commande !</h3>

                <div className="right-bottom">
                    <div className="text">
                        <label htmlFor="sub">Votre adresse email</label>
                        <input
                            type="text"
                            onFocus={focusin} 
                            onBlur={focusout}
                            id="sub"
                        />
                    </div>
                    <div className="button">S'INSCRIRE</div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe