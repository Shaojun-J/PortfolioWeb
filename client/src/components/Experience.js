import React from 'react'

export default function Experience() {
    return (
        <div>
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
        </div>
    )
}
