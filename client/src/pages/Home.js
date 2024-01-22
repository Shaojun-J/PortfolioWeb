import React from 'react'
import NavBar from '../components/NavBar'

export default function Home() {

    // if(true){
    //     return (
    //         <div style={{display:'flex'}}>
                
    //             <div style={{backgroundColor:'red', height:"100px"}}>
    //                 <h1>Div1</h1>
    //             </div>
    //             <div style={{backgroundColor:'blue', height:"200px"}}>
    //                 <h1>Div2</h1>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div>
            <div className="row " style={{ display:'flex' }}>
                <div className="col-md-3" style={{ position: 'fixed' }}>
                    <NavBar />
                </div>

                <div className="col-md-9 p1_main_div_style">
                    <div>
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



                        <div id="about_id" className="main_item_wrapper">
                            <div className="main_item_wrapper_1">
                                <p className="main_item_head_1">ABOUT ME</p>
                                <hr />
                                <h2 className="main_item_head_2">WHO AM I?</h2>
                                <br />
                                <p><span style={{ color: 'black' }}> Hi, I'm Shaojun Jiang.</span>

                                    I was born in the central region of China.
                                    I used to be an embedded software development engineer with more than ten years of working
                                    experience in that field. <br />
                                    <br />I moved to Canada three years ago. After coming to Canada, I found that I needed further
                                    study
                                    in order to find my dream job here. I am taking a software development course at Vanier
                                    College.
                                    In
                                    my free time, I like to hike and fish with my family.
                                </p>
                            </div>
                        </div>




                        <div id="skills_id" className="main_item_wrapper">
                            <div className="main_item_wrapper_1">
                                <p className="main_item_head_1">MY SPECIALTY</p>
                                <hr />
                                <h2 className="main_item_head_2">MY SKILLS</h2>
                                <div>
                                    <ul>
                                        <li>Proficient in C language</li>
                                        <li>Familiar with Socket network development, RTOS development, and ARM system</li>
                                        <li>Proficient in developing various embedded systems and microcontroller systems,
                                            familiar
                                            with
                                            various embedded
                                            peripheral interface technologies (I2C, UART, USB, SPI, Bluetooth, etc.)</li>
                                        <li>Familiar with circuit principles, skilled in using various debugging tools
                                            (multimeters,
                                            oscilloscopes, logic
                                            analyzers, soldering irons, program-controlled power supplies, etc.)</li>
                                        <li>Familiar with Socket network development, RTOS development, and ARM system;</li>
                                    </ul>

                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div className="mete1_class">
                                        <meter id="meter1" value="96" min="0" max="100">96 out of 100</meter><br />
                                    </div>
                                    <div className="mete2_class">
                                        <meter id="mete2" value="83" min="0" max="100">83 out of 100</meter><br />
                                    </div>
                                </div>

                                <div style={{ display: 'flex' }}>
                                    <div className="mete3_class">
                                        <meter id="meter3" value="87" min="0" max="100">87 out of 100</meter><br />
                                    </div>
                                    <div className="mete4_class">
                                        <meter id="mete4" value="80" min="0" max="100">80 out of 10</meter><br />
                                    </div>
                                </div>

                                <div style={{ display: 'flex' }}>
                                    <div className="mete5_class">
                                        <meter id="meter5" value="95" min="0" max="100">95 out of 100</meter><br />
                                    </div>
                                    <div className="mete6_class">
                                        <meter id="mete6" value="92" min="0" max="100">92 out of 10</meter><br />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="education_id" className="main_item_wrapper">
                            <div className=" main_item_wrapper_1">

                                <div>
                                    <p className="main_item_head_1">EDUCATION</p>
                                    <hr />
                                    <h2 className="main_item_head_2">EDUCATION</h2>
                                    <br />
                                    <br />
                                </div>


                                <div className="education_item">
                                    <div id="edu_item_head_1" className="education_item_head"
                                        onclick="education_item_head_display(id)"
                                        onmouseover="education_item_head_mouseover(this,id)"
                                        onmouseout="education_item_head_mouseout(this,id)">
                                        Vanier College - Software Development
                                    </div>
                                    <div id="edu_item_1" className="education_item_content">
                                        <ul className="abc">
                                            <li> Analyze information about jobs in the technical field of computer science </li>
                                            <li>Install and manage computers</li>
                                            <li>use programming language</li>
                                            <li>Use mathematics to solve computer-related problems</li>
                                            <li>Use object-oriented development methods</li>
                                            <li>Use a database management system</li>
                                            <li>Develop trading web applications</li>
                                            <li>Develop data exchange services</li>
                                            <li>collaborative design application</li>
                                        </ul>
                                    </div>

                                </div>


                                <div className="education_item">
                                    <div id="edu_item_head_2" className="education_item_head"
                                        onclick="education_item_head_display(id)"
                                        onmouseover="education_item_head_mouseover(this,id)"
                                        onmouseout="education_item_head_mouseout(this,id)">
                                        Mcgill University - English for Professional Communication
                                    </div>

                                    <div className="education_item_content">
                                        The program is designed to enable you to:
                                        <ul>
                                            <li>Receive a McGill Certificate of Proficiency – English for Professional
                                                Communication
                                            </li>
                                            <li>Participate in meetings, interviews, and oral presentations</li>
                                            <li>Prepare written letters, articles, and reports</li>
                                            <li>Communicate in English in formal and informal situations</li>
                                            <li>Gain the confidence to work in English in the Quebec professional context</li>


                                        </ul>
                                    </div>

                                </div>


                                <div className="education_item">
                                    <div id="edu_item_head_3" className="education_item_head"
                                        onclick="education_item_head_display(id)"
                                        onmouseover="education_item_head_mouseover(this,id)"
                                        onmouseout="education_item_head_mouseout(this,id)">
                                        Harbin Institute of Technology - Computer Science Technology
                                    </div>

                                    <div className="education_item_content">
                                        <ul>
                                            <li>Math concepts</li>
                                            <li>Programming</li>
                                            <li>Programming Patterns</li>
                                            <li>Application Development</li>
                                            <li>NetWorks</li>
                                            <li>Internet Programming</li>
                                        </ul>
                                    </div>

                                </div>


                                <div className="education_item">
                                    <div id="edu_item_head_4" className="education_item_head"
                                        onclick="education_item_head_display(id)"
                                        onmouseover="education_item_head_mouseover(this,id)"
                                        onmouseout="education_item_head_mouseout(this,id)">
                                        Hunan University of Science and Technology - Electronic and Electrical Equipment
                                    </div>

                                    <div className="education_item_content">
                                        <ul>
                                            <li>Math for computer Engineering Technology</li>
                                            <li>Analog Circuits</li>
                                            <li>Digital Circuits</li>
                                            <li>Programming Fundamentals</li>
                                            <li>Circuit Analysis and Simulation</li>
                                            <li>Microcontroller Applications</li>
                                            <li>Embedded Systems Programming</li>
                                            <li>Embedded Operating Systems</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>






                        <div id="experience_id" className="main_item_wrapper">
                            <div className="main_item_wrapper_1">
                                <div>
                                    <p className="main_item_head_1">EXPERIENCE</p>
                                    <hr />
                                    <h2 className="main_item_head_2">WORK EXPERIENCE</h2>
                                    <br />
                                    <br />

                                    <div className="experience_item">
                                        <div className="experience_item_head">
                                            Embedded Software Engineer <span>2019-2020</span>
                                        </div>
                                        <br />

                                        <div className="experience_item_content">
                                            <ul>
                                                <li>Responsible for embedded software development</li>
                                                <li>Responsible for product software and hardware debugging</li>
                                            </ul>
                                        </div>

                                    </div>


                                    <div className="experience_item">
                                        <div className="experience_item_head">
                                            Embedded Software Engineer <span>2016-2019</span>
                                        </div>
                                        <br />

                                        <div className="experience_item_content">
                                            Responsible for product embedded software development
                                            <ul>
                                                <li>E501 Long Standby Vehicle Locator</li>
                                                <li>M201 fire data collection terminal</li>
                                                <li>WG06 child positioning anti-lost device</li>
                                                <li>L303 Community Orientation Care Bracelet</li>
                                                <li>E606 Position Tracker</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="contact_id" className="main_item_wrapper">
                            <div className="main_item_wrapper_1">
                                <div>
                                    <p className="main_item_head_1">GET IN TOUCH</p>
                                    <hr />
                                    <h2 className="main_item_head_2">CONTACT</h2>
                                </div>

                                <div className="contact_id_table">
                                    <div className="contact_table">
                                        <table>
                                            <tr>
                                                <td className="contact_id_table_td">
                                                    Phone:
                                                </td>
                                                <td>
                                                    <a href="tel:872-993-5993">872-993-5993</a>
                                                </td>

                                            </tr>

                                            <tr>

                                                <td>
                                                    Address:
                                                </td>
                                                <td>
                                                    Walkley Av, Montreal, QC, Canada
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    Email:
                                                </td>
                                                <td>
                                                    <a href="mailto:shaun.jiasng@outlook.com">shaun.jiasng@outlook.com</a>
                                                </td>

                                            </tr>
                                            <tr>

                                                <td>
                                                    Linkedin:
                                                </td>
                                                <td>
                                                    <a href="https://www.linkedin.com/in/shaojun-jiang"
                                                        target="_blank">linkedin.com/in/shaojun-jiang</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="contact_form">
                                        <form style={{ width: '100%' }}>
                                            <input className="contact_form_input" type="text" id="name_id" name="name"
                                                placeholder="Name" /><br />
                                            <input className="contact_form_input" type="email" id="email_id" name="email"
                                                placeholder="Email" /><br />
                                            <input className="contact_form_input" type="text" id="subject_id" name="subject"
                                                placeholder="Subject" /><br />
                                            <textarea className="contact_form_input" name="message"
                                                placeholder="Message"></textarea><br />
                                            <input className="contact_form_input contact_form_submit" type="submit" id="submit_id"
                                                name="submit" value="SEND MESSAGE" /><br />
                                        </form>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
