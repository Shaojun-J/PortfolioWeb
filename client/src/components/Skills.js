import React from 'react'

export default function Skills() {

    return (
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

    )
}
