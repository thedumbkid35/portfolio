import React from "react";
import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project3 from '../assets/project3.png';
import Project4 from '../assets/project4.png';
import './Project.css';

function Project(){
  return (
  <div className="about-content">

    {/* First Project */}
    <h2>1. Automated Quiet Window</h2>

    <p>
      <strong>Automated Quiet Window</strong> is a Frame-Mounted <strong>Active Noise Cancellation (ANC) System</strong> designed to reduce environmental noise in urban residential areas. Traditional passive soundproofing methods are often expensive and ineffective against low-frequency disturbances.
    </p>

    <p>
      The system utilizes <strong>external and internal microphones</strong> to capture incoming noise and monitor cancellation performance in real time. A dedicated <strong>Digital Signal Processing (DSP) unit</strong> implements adaptive filtering techniques such as the <strong>Least Mean Square (LMS) algorithm</strong> to generate phase-inverted anti-noise signals through strategically positioned speakers.
    </p>

    <p>
      Engineered to be <strong>compact</strong>, <strong>energy-efficient</strong>, and compatible with modern window designs, the project offers an advanced and cost-effective alternative to conventional soundproofing systems.
    </p>

    <p>
  <strong>Tech Stack:</strong> ESP32, DHT Sensors, MATLAB, Web-Based Monitoring Dashboard
</p>

    {/* Second Project */}
    <h2>2. MedBOT</h2>

    <p>
      <strong>MedBOT</strong> is a responsive <strong>web-based healthcare assistant</strong> that provides recipe suggestions, BMI tracking, and quick health remedies to support everyday wellness management.
    </p>

    <p>
      The platform integrates the <strong>Spoonacular API</strong> to deliver intelligent nutrition-based recommendations. Built using <strong>React.js</strong> with responsive CSS design, the application ensures accessibility and usability across multiple devices.
    </p>

    <p>
      <strong>Tech Stack:</strong> React.js, Spoonacular API, CSS (Responsive Design)
    </p>


    {/* Third Project */}
    <h2>3. Cyber-Resilient Renewable Energy Based Smart Grid</h2>

    <p>
      The <strong>Cyber-Resilient Renewable Energy Based Smart Grid</strong> project focuses on developing an intelligent and secure power distribution system that integrates renewable energy sources with modern smart grid technologies to enhance reliability, efficiency, and sustainability.
    </p>

    <p>
      The system incorporates <strong>solar energy generation</strong>, <strong>battery storage</strong>, <strong>real-time monitoring</strong>, and <strong>automated load management</strong>. Sensors continuously measure voltage, current, and power consumption, while embedded controllers such as <strong>ESP32</strong> enable dynamic load balancing by prioritizing critical loads during power fluctuations.
    </p>

    <p>
      A key feature of the project is its <strong>cyber resilience</strong>. The system detects abnormal data patterns, communication tampering, and simulated cyber attacks such as false data injection. Upon threat detection, affected components are isolated to maintain stable grid operation.
    </p>

    <p>
      The project also includes a <strong>web-based monitoring dashboard</strong> displaying real-time electrical parameters and performance analytics. Simulation tools such as <strong>MATLAB</strong> and <strong>PSCAD</strong> were used to validate system behavior under various operating and fault conditions.
    </p>

    <p>
      This project demonstrates a secure, efficient, and intelligent renewable energy-based smart grid model suitable for modern power distribution systems and future sustainable energy infrastructure.
    </p>

    <p>
  <strong>Tech Stack:</strong> ESP32, Embedded C/C++, Solar PV System, Real-Time Sensors, MATLAB, Web-Based Monitoring Dashboard
</p>

  </div>
);

}

export default Project;