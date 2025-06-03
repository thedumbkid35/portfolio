import React from "react";
import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import './Project.css';

function Project(){
    return (
        <div className="Projects">
            <a href="https://med-bot-khaki.vercel.app"><div className="Project1">
            <img src={Project1} alt="med_bot" height='300px'/>
            <h2><strong>MedBOT</strong></h2>
  <p>
  <strong>MedBOT</strong> is a responsive web-based healthcare assistant that helps users with recipe suggestions, BMI tracking, and quick health remedies. <br />
  <strong>Tech Stack:</strong> React.js, Spoonacular API, CSS (Responsive Design)
</p>


            </div></a>
            <a href="https://hashit.onrender.com/login"><div className="Project2">
                <img src={Project2} alt="hash_it" height='300px' />
                <h2><strong>HashIt</strong></h2>
            <p>
  <strong>HashIt</strong> is a blog-based web platform where users can sign in, create posts, view others’ posts, like them, and leave comments—similar to Instagram but focused on blog-style content. <br />
  <strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, Passport.js, bcrypt, Cloudinary, EJS, CSS
</p>

            </div></a>
        </div>
    )
}

export default Project;