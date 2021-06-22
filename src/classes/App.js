import '../scss/App.scss';

import React, { useState } from 'react'
import uuid from 'react-uuid'
import Header from './Header'
import Canvas from './Canvas'
import Slider from './Slider'
import Intro from './Intro'

function App() {
  let data = [
    {
      name: 'Combien êtes-vous dans votre domicile ?',
      type: 'text2',
      id_question: 5,
      options: [
        {
          id_option: 1,
          name: 'Adultes'
        },
        {
          id_option: 2,
          name: 'Enfants'
        }
      ]
    },
    {
      name: 'Quel est votre ressenti sur la qualité de vos ingrédients',
      type: 'cursor',
      id_question: 8,
      options: [
        {
          id_option: 1,
          name: 'Très mauvais'
        },
        {
          id_option: 2,
          name: 'Mauvais'
        },
        {
          id_option: 3,
          name: 'Médiocre'
        },
        {
          id_option: 4,
          name: 'Bon'
        },
        {
          id_option: 5,
          name: 'Très bon'
        },
        {
          id_option: 6,
          name: 'Excellent'
        }
      ]
    },
    {
      name: 'Vous êtes plutôt...',
      type: 'radio',
      id_question: 1,
      options: [
        {
          id_option: 1,
          name: 'Chocolat'
        },
        {
          id_option: 2,
          name: 'Fraise'
        },
        {
          id_option: 3,
          name: 'Vanille'
        }
      ]
    },
    {
      name: 'Choix facile',
      type: 'checkbox',
      id_question: 4,
      options: [
        {
          id_option: 1,
          name: 'Option 1'
        },
        {
          id_option: 2,
          name: 'Option 2'
        },
        {
          id_option: 3,
          name: 'Option 3'
        },
        {
          id_option: 4,
          name: 'Option 4'
        },
      ]
    }
  ]

  let avis = [
    {
      question: 'Vos repas de la semaine cuisinés chez vous en une fois par nos chefs',
      response: 'Wow c’est génial ! J’ai adoré que miguel vienne chez moi pour tout me préparer.',
      name: 'Justine',
      sub: 'Membre depuis 3mois'
    },
    {
      question: 'Une deuxième question aléatoire',
      response: 'J’adore ! Je recommande à tout le monde !',
      name: 'Charlotte',
      sub: 'Membre depuis 6ans'
    }
  ]

  let [formData, setFormData] = useState({})
  let [menuActive, setMenuActive] = useState(false) //window.innerWidth < 767 ? false : true
  let [token] = useState(uuid())
  let [answer, setAnswer] = useState(false)

  function updateData(type, e) {
    // console.log(type);
    if(e.target.value !== undefined || e.target.checked !== undefined) {
      let data = {...formData}
      let id_question = parseInt(e.target.getAttribute('data-id_question'))
      let id_option = parseInt(e.target.getAttribute('data-id_option'))
      switch(type) {
        case 'text2':
          if(!data[id_question]) {
            data[id_question] = {}
            data[id_question]['options'] = {}
          }
          data[id_question]['options'][id_option] = parseInt(e.target.value)
          break
          case 'select':
            if(!data[id_question]) {
              data[id_question] = {}
            }
            data[id_question]['options'] = {}
            data[id_question]['options'][parseInt(e.target.value)] = true
            break
          case 'cursor':
          case 'radio':
            if(!data[id_question]) {
              data[id_question] = {}
            }
            data[id_question]['options'] = {}
            data[id_question]['options'][id_option] = e.target.checked
            break
            
          case 'checkbox':
            if(!data[id_question]) {
              data[id_question] = {}
              data[id_question]['options'] = {}
            }
            data[id_question]['options'][id_option] = e.target.checked
            break

          case 'text':
          default:
            data[id_question] = e.target.value
        }
        // console.log(data);
        setFormData(data)
    }
  }

  function submitData() {
    let params = {
      method: 'POST',
      body: JSON.stringify({
        'token' : token,
        'data' : formData
      })
    }

    fetch('https://appcompet.herokuapp.com/getform', params)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      setAnswer(true)
  }

  
  
  if(answer) {
    return (
      <div className="App">
          answer
      </div>
    )
  } else {
    let ma = menuActive ? ' menu-open' : ''

    return (
      <div className={'App'+ma}>
        <Intro />
        <Header avis={avis} menuActive={menuActive} setMenuActive={setMenuActive} />
        <Canvas />
        <Slider data={data} formData={formData} updateData={updateData} submitData={submitData} />
      </div>
    )
  }
}

export default App
