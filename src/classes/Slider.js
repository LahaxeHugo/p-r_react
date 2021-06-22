import React, { useState } from 'react'
import Controls from './controls/Controls'
import Slide from './Slide'
// import SlideEnd from './SlideEnd'

function Slider({ data, formData, updateData, submitData }) {
    let [current, setCurrent] = useState(0)

    function updateSlide1(type) {
        if(type === 'left') {
            if((current - 1) >= 0) setCurrent(parseInt(current - 1))
        }
        else if(type === 'right') {
            if(current < data.length) {
                if(verifyInput(data[current], formData)) {
                    if((current + 1) < (data.length)) setCurrent(parseInt(current + 1))
                } else {
                    alert('Remplir la question')
                }
            } else {
                if((current + 1) < (data.length)) setCurrent(parseInt(current + 1))
            }
        }
    }

    function updateSlide2(to) {
        if(to > current) {
            let empty = []
            for (let i = current; i < to; i++) {
                if(!verifyInput(data[i], formData)) {
                    empty.push(i+1)
                }
            }
            if(empty.length === 0) {
                setCurrent(to)
            } else {
                alert('Remplir les questions : '+empty.join(', '))
            }
        } else {
            setCurrent(to)
        }
    }

    let slides = data.map((row, index) => {
        return <Slide row={row} updateData={updateData} formData={formData} key={index} index={index+1} />
    })

    function verifyInput(data, formData) {
        let id_question = data.id_question

        if(formData[id_question]) {
            if(formData[id_question].options) {
                if(data.type === 'text2') {
                    let max = data.options.length
                    let count = 0
                    for(let option in formData[id_question].options) {
                        if(!isNaN(formData[id_question].options[option])) count++
                    }
                    if(count !== max) return false
                } else {
                    let count = 0
                    for(let option in formData[id_question].options) {
                        if(formData[id_question].options[option] === true) count++
                    }
                    if(count === 0) {
                        return false
                    }
                }
            } else {
                if(formData[id_question].length === 0) {
                    return false
                }
            }
        } else {
            return false
        }
        return true
    }

    return (
        <div className="Slider">
            <div className="slides" style={{left: -((current)*100) + '%'}}>
                {slides}
                {/* <SlideEnd index={slides.length} submitData={submitData} /> */}
            </div>
            <Controls data={data} current={current} updateSlide1={updateSlide1} updateSlide2={updateSlide2} />
        </div>
    )
}

export default Slider