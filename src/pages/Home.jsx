import React from "react";
import "./Home.css";
import image from "../assets/image.jpeg"
function Home(){
    return (
        <div>
        <section id="home" className="home-wrapper">
            <div className="home-content">
                <div className="hero">
                    <h1>Building the Web, One Line at a Time </h1>
                    <h3>- Suvan Balasubramaniam</h3>
                    
                </div>
                <div className="image">
                    <img src={image} alt="My_image" height='680px'/>
                    <div className="Note">
                    Clean. Efficient. CSS3-Only UI/UX
                </div>
                </div>
                
         </div>
        </section>

        </div>
    );
}

export default Home;