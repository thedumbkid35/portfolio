import React from "react";
import insta from '../assets/inst.png'
import linked from '../assets/linked.png'
import git from '../assets/git.png'
import './Contact.css'
function Contact(){
    return (
        <div>
            <h1>Connect With Me</h1>
            <div className="contacts">
                <div className="contact">
                   <a href="https://www.instagram.com/__notreallaksh__/"><img src={insta} alt="insta" height='100px'/></a>
                </div>
                <div className="contact">
                    <a href="https://www.linkedin.com/in/lakshan-vidhyuth-lb-5b4551328/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linked} alt="insta" height='100px'/></a>
                </div>
                <div className="contact">
                    <a href="https://github.com/BlackNinja43"><img src={git} alt="insta" height='100px'/></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;