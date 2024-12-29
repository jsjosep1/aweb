import './feb.css'
import image1 from './feb1.jpg'
import image2 from './feb2.jpg'
import Aos from "aos";
import 'aos/dist/aos.css'
import React, { useEffect} from "react";

export default function Feb(){
    useEffect(() => {
        Aos.init({once: true, duration : 500});
    })
    return (
        <>
        <div >
            <ul className='feb'><li>
            <h1 data-aos="zoom-in">Formula Electric Berkeley - Aerodynamics Advisor 
            and Engineering Lead</h1>
            <h2 data-aos="zoom-in">Role Overview: </h2>
            <p data-aos="zoom-in"> Currently spearheading a team of 20 engineers, I am dedicated to enhancing 
                manufacturing processes and aerodynamic designs, consistently achieving greater efficiency 
                than projected timelines</p>
            <h2 data-aos="zoom-in">Innovative Design Techniques:</h2>
            <p data-aos="zoom-in">Actively developing advanced resin infusion methods and 
                collaborating with CFD and CAD subteams to engineer aerodynamically superior wings that 
                significantly increase downforce, drag, and torque.</p>
            <h2 data-aos="zoom-in">Material and Design Expertise</h2>
            <p data-aos="zoom-in">Material and Design Expertise: Extensive experience in designing and manufacturing vehicle 
                aerodynamics using state-of-the-art materials including carbon fiber, fiberglass, Kevlar, and 
                resin. Skilled in employing SolidWorks PDM for iterative CAD modeling and leveraging 
                Composite FEA for material testing</p>
            <h2 data-aos="zoom-in">Simulation and Prototyping:</h2>
            <p data-aos="zoom-in">Accrued over 800 hours in CAD and 400 hours in CFD, performing 
                detailed simulations to perfect designs prior to fabrication. Expert in various fabrication 
                techniques such as layups, and proficient with the Instron machine for testing dogbones, as well 
                as Dremel and CNC machining for precise tooling board cuts.</p></li>
            <li >
            <ul className='images'>
                <li data-aos="zoom-in"><img src={image1} alt='uh' width={350}/></li>
                <li data-aos="zoom-in"><img src={image2} alt='uh' width={350}/></li>
            </ul></li>
            </ul>
        </div>
        </>
    )

}