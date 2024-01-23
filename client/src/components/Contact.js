import React from 'react'

export default function Contact() {
    return (
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
                            <tbody>
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
                            </tbody>
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
    )
}
