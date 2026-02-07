import React from "react";
import "./Home.css";
import image from "../assets/Lux.jpeg"
function Home(){
    return (
        <div>
        <section id="home" className="home-wrapper">
            <div className="home-content">
                <div className="hero">
                    <h1>Built on Voltage, Driven by Vision.</h1>
                    <h3>- Lakshan Vidhyuth LB</h3>
                    
                </div>
                <div className="image">
                    <img src={image} alt="My_image" height='680px'/>
                </div>
                
         </div>
        </section>

        </div>
    );
}

export default Home;