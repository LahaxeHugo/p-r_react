import '../scss/App.scss';

import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import Header from './Header'
import Canvas from './Canvas'
import Slider from './Slider'
import Intro from './Intro'
import Answer from './answer/Answer'

function App() {
  let [data, setData] = useState([])
  
  useEffect(() => {
    let params = {}
    fetch('https://proxy-ail.herokuapp.com/https://appcompet.herokuapp.com/getQuest', params)
      .then(res => res.json())
      .then(d => {
        setData(d)
        console.log(d);
      })
  }, [])

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

    fetch('https://proxy-ail.herokuapp.com/https://appcompet.herokuapp.com/postform', params)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      setAnswer(true)
  }
  
  if(answer) {
    return (
      <div className="App">
          <Answer />
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
