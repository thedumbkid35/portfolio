import React from "react";
import Project1 from '../assets/project1.png'
import './Project.css';

function Project(){
    return (
        <div className="Projects">
            <a href="https://med-bot-khaki.vercel.app"><div className="Project1">
            <img src={Project1} alt="med_bot" height='300px'/>
            <h2><strong>MedBOT</strong></h2>
  <p>
    <strong>MedBOT</strong> is a responsive web-based healthcare assistant designed to help users manage their wellness using simple, effective tools. It integrates the <strong>Spoonacular API</strong> to provide real-time recipe suggestions through the <strong>Recipe Generator</strong>, which asks users for available ingredients at home and returns complete recipes with instructions. The bot also includes a <strong>BMI Calculator</strong> that not only computes the Body Mass Index but also provides <strong>personalized nutritional suggestions</strong> based on the user's results. Additionally, the <strong>Health Remedies</strong> feature allows users to input basic health symptoms and receive <strong>quick, homemade solutions</strong> for relief. Built with <strong>React.js</strong> and styled for full <strong>mobile responsiveness</strong>, Med-Bot ensures a smooth and intuitive user experience. To top it off, a <strong>dynamic footer</strong> runs rotating health tips, encouraging consistent wellness and awareness.
  </p>

            </div></a>
        </div>
    )
}

export default Project;