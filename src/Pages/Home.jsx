import React, { useEffect, useState } from "react";
import logo from './aaravpfp.png'
import ucblogo from './UC-Berkeley-Symbol-700x394.png'
import paccar from './paccar.png'
import feb from './feb.jpg'
import laser from './engraving.jpg'
import miata from './miata.jpg'
import cad from './cadproj.jpg'
import aboutme from './aboutme.jpg'
import './home.css'
import td from './3d.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope, faLaptop, faPhone, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import 'aos/dist/aos.css'
import Card from "./card";
export default function Home(){
    const introText = `Hi, I am Aarav Bedi, a mechanical engineering junior undergraduate from the University of California, Berkeley. I specialize in Mechanical Engineering Manufacturing and Design for Manufacturing using various experiences.`;
    
    const useTypewriterEffect = (fullText, speed = 40, duration = 3000) => {
        const [displayedText, setDisplayedText] = useState('');
    
        useEffect(() => {
            Aos.init({ duration, once : true });
            let index = 0;
            const interval = setInterval(() => {
                setDisplayedText(fullText.slice(0, index));
                index++;
                if (index > fullText.length) {
                    clearInterval(interval);
                }
            }, speed);
    
            return () => clearInterval(interval);
        }, [fullText, speed, duration]);
    
        return displayedText;
    };

    useEffect(() => {
        Aos.init({duration:3000})
    },);
    const intro = useTypewriterEffect(introText,40,3000)

    return (
        <>
        <div className="home_page">
            <img className="pfp" width={600} height={600} src={logo} alt="profile-picture" data-aos="zoom-in"></img>
            <div className="intro">
                <h1 className="header" data-aos = "fade-down">Aarav Bedi</h1>
                <p className="introductionpara">{intro}</p>
            <div className="socials">
                <ul className="list">
                    <li data-aos="fade-up"><a href="https://linkedin.com/in/aaravbedi"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                    <li data-aos="fade-up"><a href="tel:+15108388004"><FontAwesomeIcon icon={faPhone}/></a></li>
                    <li data-aos="fade-up"><a href="mailto:aaravbedi@berkeley.edu"><FontAwesomeIcon icon={faEnvelope}/></a></li>
                </ul>
            </div>
            </div>
            
        </div>
        <div className="Education">
            <h1 className="edbg" data-aos="fade-up">Educational Background</h1>
            <img className = "ucblogo" src={ucblogo}  alt="ucblogo" data-aos="fade-up"></img>
            <h2 data-aos="fade-up">BSc Mechanical Engineering (Aug 2022 - May 2026)</h2>
            <p className="coursework" data-aos="fade-up"> Relevant Coursework: Solid Mechanics, 3D Modeling and Design, Manufacturing and Design Communication, MATLAB, Finite Element Analysis, Electronics in Engineering, Therymodynamics, Fluid Mechanics, Mechanical Behaviors of Materials, Structural Aspects, Stats and Data Science.</p>
            
        </div>

        <div className="techskills">
            <h1 className="thead" data-aos="fade-up">Technical Skills</h1>
            <ul className="skills">
                <h1 data-aos="fade-up"><FontAwesomeIcon icon={faLaptop} size="2x"/></h1>
                <p data-aos="fade-up">SolidWorks, CATIA, CREO, TruckSIM, SmartUQ, Altair One HyperMesh FEA, MATLAB, CFD Ansys, Fusion 360, AutoCAD, GD&T, Python, MQTT</p>
                <h1 data-aos="fade-up"><FontAwesomeIcon icon={faScrewdriverWrench} size="2x"/></h1>
                <p data-aos="fade-up">Welding, Milling, CNC machining, 3D Printing, 3D Scanning, Instron Machine, laser cutting, TIG, Waterjet, Poly Jet Printers, Wood Shop, Lathes, Composites Layup, Dremel. </p>
    
            </ul>
        </div>

        <div className="aboutme" id="aboutme">
            <img className="aboutmepic" width={500} height={500} src={aboutme} alt="profile-picture" data-aos="zoom-in"></img>
                <div className="intro">
                    <h1 className="header" data-aos = "fade-down">About Me</h1>
                    <p className="introductionpara" data-aos = "fade-down">My name is Aarav Bedi, and I am a proactive and passionate student at UC Berkeley, driven by a commitment to excellence in mechanical engineering. I aspire to contribute to innovative companies, aligning with their vision and mission to drive meaningful impact. I value teamwork, supporting my colleagues, and fostering a collaborative and positive work environment. My focus lies in identifying opportunities for growth and success, both for the team and the organization, while maintaining a people-first approach. </p>
                </div>
    
        </div>

        <div className="projectsexp">
            <h1 className="phead">Projects and Experiences</h1>
            <div className="cards" data-aos="fade-up">
                <Card title="Internship at PACCAR for Finite Element Analysis(FEA)" imageUrl={paccar} projectLink="/paccar"></Card>
                <Card title="Formula Electric Berkeley" imageUrl={feb} projectLink="/feb" ></Card>
                <Card title="3D Printing a Formula Electric Vehicle" imageUrl={td} projectLink="/decor"></Card>
                <Card title="Project Miata" imageUrl={miata} projectLink="/miata"></Card>
                <Card title="1992 Mazda Miata Lazer Engraving" imageUrl={laser} projectLink="/engraving"></Card>
                <Card title="Personal CAD Projects (SolidWorks)" imageUrl={cad} projectLink="/personalproj"></Card>
                
            </div>

        </div>
        
        
        
        </>

    );
}


