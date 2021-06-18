import '../css/App.css';

import React, { useState, useEffect } from 'react'
import Canvas from './Canvas'
import Slider from './Slider'

function App() {
  let data = [
    {
      name: 'Question 1',
      type: 'text',
      id_question: 1,
      options: []
    },
    {
      name: 'Question 2',
      type: 'text',
      id_question: 2,
      options: []
    },
    {
      name: 'Question 3',
      type: 'text',
      id_question: 3,
      options: []
    },
    {
      name: 'Question 4',
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

  let [formData, setFormData] = useState({})

  function updateData(type, e) {
    if(!(e.target.value === undefined || e.target.checked === undefined)) {
      let data = new Object(formData)
      let id_question = parseInt(e.target.getAttribute('data-id_question'))
      let id_option = parseInt(e.target.getAttribute('data-id_option'))
      switch(type) {
          case 'checkbox':
            if(!data[id_question]) {
              data[id_question] = {}
              data[id_question]['options'] = {}
            }
            data[id_question]['options'][id_option] = e.target.checked
            break;
          case 'text':
          default:
            data[id_question] = e.target.value
        }
        setFormData(data)
    }
  }

  function submitData() {
    let params = {
      method: 'POST',
      body: JSON.stringify(formData)
    }

    fetch('https://appcompet.herokuapp.com/getform', params)
      .then(function(response) {
        console.log(response);
      })
  }


  return (
    <div className="App">
      <Canvas />
      <Slider data={data} formData={formData} updateData={updateData} />
      <button onClick={submitData}>Send</button>
    </div>
  );
}

export default App
