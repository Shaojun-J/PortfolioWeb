import React from 'react'
import NavBar from '../components/NavBar'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import About from '../components/About'

export default function Home() {

    return (
        <div className="row " style={{ display: 'flex' }}>
            <div className="col-md-3" style={{ position: 'fixed' }}>
                <NavBar />
            </div>

            <div className="col-md-9 p1_main_div_style">
                <div id="home_id" className="home_wrapper_style">
                    <div>
                        <h1>HI!</h1>
                        <h1>I'm Shaojun</h1>
                        <p> Full-Stack developer</p>
                        <br />
                        <div className="home_id_portfolio">
                            <a href="./index.html#about_id">VIEW PORTFOLIO</a>
                        </div>
                    </div>
                </div>

                <About />
                <Skills />
                <Education />
                <Experience />
                <Contact />
            </div>
        </div>
    )
}
