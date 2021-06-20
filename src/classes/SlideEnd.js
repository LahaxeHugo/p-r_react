import  React, { useState } from 'react'

function SlideEnd({ index, submitData }) {
    let [email, setEmail] = useState('')

    function verifyMail() {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = re.test(String(email).toLowerCase());
        if(valid) {
            submitData()
        } else {
            alert('email non valide')
        }
    }

    function updateEmail(e) {
        setEmail(e.target.value)
    }

    function focusin(e) {
        e.target.parentNode.classList.add('active')
    }

    function focusout(e) {
        if(e.target.value.length === 0) 
            e.target.parentNode.classList.remove('active')
    }

    return(
        <div className="Slide SlideEnd" style={{left: ((index)*100) + '%'}}>
            <h3>Recevez les résultats par mail</h3>
            <div className="email-wrapper">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onFocus={focusin} onBlur={focusout} onChange={updateEmail}/>
            </div>
            <div className="submitData" onClick={verifyMail}>Envoyer</div>
        </div>
    )
}

export default SlideEnd