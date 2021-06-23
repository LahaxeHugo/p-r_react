import React from 'react'

function Footer() {
    return(
        <div className="Footer">
            <div className="menu">
                <div className="column">
                    <div className="title">Formule</div>
                    <div className="list">
                        <a href="https://p-r-react.vercel.app/">Menu</a>
                        <a href="https://p-r-react.vercel.app/">Offrir</a>
                    </div>
                </div>
                <div className="column">
                    <div className="title">Persil & Romarin</div>
                    <div className="list">
                        <a href="https://p-r-react.vercel.app/">A propos</a>
                        <a href="https://p-r-react.vercel.app/">Concept</a>
                        <a href="https://p-r-react.vercel.app/">Nos engagements</a>
                        <a href="https://p-r-react.vercel.app/">Nos chefs</a>
                        <a href="https://p-r-react.vercel.app/">Tarifs</a>
                        <a href="https://p-r-react.vercel.app/">Blog</a>
                    </div>
                </div>
                <div className="column">
                    <div className="title">Aide</div>
                    <div className="list">
                        <a href="https://p-r-react.vercel.app/">Questions fréquentes</a>
                        <a href="https://p-r-react.vercel.app/">Contact</a>
                        <a href="https://p-r-react.vercel.app/">Mesure Covid</a>
                    </div>
                </div>
                <div className="column">
                    <div className="title">Légal</div>
                    <div className="list">
                        <a href="https://p-r-react.vercel.app/">Conditions Générales de Vente</a>
                        <a href="https://p-r-react.vercel.app/">Mentions Légales</a>
                        <a href="https://p-r-react.vercel.app/">Politique de confidentialité</a>
                        <a href="https://p-r-react.vercel.app/">Gestion des données</a>
                    </div>
                </div>
            </div>
            <div className="rs">
                <p>Rejoignez-nous !</p>
                <div className="list">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="bottom">
                <p>07 56 85 85 43</p>
                <p>persiletromarin.fr</p>
                <p>bonjour@persiletromarin.fr</p>
            </div>
        </div>
    )
}

export default Footer