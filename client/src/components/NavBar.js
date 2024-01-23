import React from 'react'
import Weather from './Weather'


export default function NavBar() {
    return (
        <div className="p1_nav_div_style">
            <div>
                <div className="photo_wrapper">
                    <img className='phone_img' src="./my.jpg" />
                </div>


                <div>
                    <h2>Shaojun Jiang</h2>
                    <p><span style={{ color: '#46a5f1' }}>Full-Stack</span> developer</p>
                    <br />
                </div>
            </div>

            <div>
                <nav className="nav_style ">
                    <ul className="nav justify-content-center flex-column nav_listStyle" >
                        <li className="nav-item">
                            <a href="./index.html">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a href="./index.html#about_id">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a href="./index.html#skills_id">SKILLS</a>
                        </li>

                        <li className="nav-item">
                            <a href="./index.html#education_id">EDUCATION</a>
                        </li>
                        <li className="nav-item">
                            <a href="./index.html#experience_id">EXPERIENCE</a>
                        </li>

                        <li className="nav-item">
                            <a href="./index.html#contact_id">CONTACT</a>
                        </li>

                        <hr />

                    </ul>
                </nav>
            </div>

            <Weather />
            <hr />

            <div className="copyright_style">
                Copyright &copy; 2023 All rights reserved
            </div>
        </div>
    )
}
