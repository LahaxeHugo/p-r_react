import React from 'react'
import Step from './Step'

function Section2() {
    let data = [
        {
            title: 'Composez votre menu de la semaine parmi notre sélection',
            options: [
                'Découvrez notre menu de la semaine : une quinzaine de plats pour ravire vos papilles !',
                'Choisissez-vos le nombre de plats et de portions qu’il vous faut en fonction de vos habitudes. Midi, soir ou les deux votre chef s’adapte !',
                'Personnalisez vos plats comme bon vous semble. Allergies, aversion : Retirez simplement les incrédients qui ne vous conviennent plats.'
            ]
        },
        {
            title: 'Votre chef s’occupe de sélectionner les meilleurs ingrédients',
            options: [
                'Vous méritez le meilleur dans votre assiette. Nous avons développé un réseau de producteurs partenaires pour vous fournir des produits labellisés .',
                'Au final, des petits plats fait-maison et ultra-frais avec des ingrédients de qualité.'
            ]
        },
        {
            title: 'Votre chef vous rend visite une fois par semaine tout préparer dans les règles de l’art !',
            options: [
                'Vous choisissez la date, l’heure et l’endroit. Notre chef se rend chez vous, dans votre cuisine et prépare en seulement 2h vos plats de la semaine.',
                'Une fois fini, il range vos plats dans le frigo, nettoie votre cuisine et vos ustensils. Vous n’avez rien à faire !'
            ]

        },
        {
            title: 'Il ne vous reste plus qu’à profiter',
            options: [
                'Vous choisissez le plat que vous souhaitez manger.',
                'Vous le rechauffez.',
                '3... 2... 1 c’est prêt, savourez !'
            ]
        }
    ]

    let steps = data.map((row,index) => {
        return <Step row={row}  index={index+1} />
    })

    return(
        <div className="Section2">
            <h2>NOUS SOMMES LÀ POUR VOUS AIDER</h2>
            <h3>Persil & Romarin, c’est vos repas de la semaine cuisinés chez vous par nos chefs</h3>

            <div className='steps'>
                {steps}
            </div>
        </div>
    )
}

export default Section2