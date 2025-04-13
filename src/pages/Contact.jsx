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
                   <a href="https://www.instagram.com/suvanbalasubramaniam/"><img src={insta} alt="insta" height='100px'/></a>
                </div>
                <div className="contact">
                    <a href="https://www.linkedin.com/in/suvan-balasubramaniam-ab6a52334/"><img src={linked} alt="insta" height='100px'/></a>
                </div>
                <div className="contact">
                    <a href="https://github.com/thedumbkid35"><img src={git} alt="insta" height='100px'/></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;