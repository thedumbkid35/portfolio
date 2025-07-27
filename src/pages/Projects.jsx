import React from "react";
import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project3 from '../assets/project3.png';
import Project4 from '../assets/project4.png';
import './Project.css';

function Project(){
    return (
        <div className="Projects">
            <a href="https://med-bot-khaki.vercel.app"><div className="Project1">
            <img src={Project1} alt="med_bot" height='140px'/>
            <h2><strong>MedBOT</strong></h2>
  <p>
  <strong>MedBOT</strong> is a responsive web-based healthcare assistant that helps users with recipe suggestions, BMI tracking, and quick health remedies. <br />
  <strong>Tech Stack:</strong> React.js, Spoonacular API, CSS (Responsive Design)
</p>


            </div></a>
            <a href="https://hashit.onrender.com/login"><div className="Project2">
                <img src={Project2} alt="hash_it" height='140px' />
                <h2><strong>HashIt</strong></h2>
            <p>
  <strong>HashIt</strong> is a blog-based web platform where users can sign in, create posts, view others’ posts, like them, and leave comments—similar to Instagram but focused on blog-style content. <br />
  <strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, Passport.js, bcrypt, Cloudinary, EJS, CSS
</p>

            </div></a>

            <a href="https://email-classifier-qgt0.onrender.com"><div className="Project3">
                <img src={Project3} alt="mail_sift" height='140px' />
                <h2><strong>MailSift</strong></h2>
            <p>
  <strong>MailSift</strong> is an NLP-based email classifier that categorizes input messages into <em>Important</em>, <em>Personal</em>, or <em>Spam</em> using a real-time Machine Learning model built with scikit-learn. The frontend interacts with a Python backend via Express.js for seamless classification. <br />
<strong>Tech Stack:</strong> Node.js, Express.js, Python, scikit-learn, JavaScript, HTML, CSS

</p>

            </div></a>

            <a href="https://swiftbasket-1-i374.onrender.com"><div className="Project4">
                <img src={Project4} alt="mail_sift" height='140px' />
                <h2><strong>SwiftBasket</strong></h2>
            <p>
  <strong>SwiftBasket</strong> is a full-stack E-Commerce web application that lets users browse products, manage a shopping cart, and place orders with delivery details — all in a clean, user-friendly interface. It features server-side rendering with EJS and robust backend logic powered by Express and PostgreSQL, using Sequelize ORM for data management. <br />
<strong>Tech Stack:</strong> Node.js, Express.js, EJS, PostgreSQL, Sequelize, JavaScript, HTML, CSS, express-session, connect-flash, express-validator


</p>

            </div></a>
        </div>
    )
}

export default Project;