import React from 'react'
import Menu from './Menu'
import Section1 from './Section1'
import Section2 from './Section2'
import Subscribe from './Subscribe'
import Footer from './Footer'

function Answer({ formData }) {
    return (
        <div className="Answer">
            <Menu />
            <Section1 formData={formData} />
            <Section2 />
            <Subscribe />
            <div className="slogan"></div>
            <Footer />
        </div>
    )
}

export default Answer