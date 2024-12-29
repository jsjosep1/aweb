import './personal.css'
import image1 from './pc1.jpg'
import image2 from './pc2.jpg'
import image3 from './pc3.jpg'
import Aos from "aos";
import 'aos/dist/aos.css'
import React, { useEffect} from "react";


export default function Personal(){
    useEffect(() => {
        Aos.init({once: true, duration : 500});
    })
    return (
        <>
        <div >
            <ul className='personal'><li>
            <h1 data-aos="zoom-in">Personal CAD Projects</h1>
            <h2 data-aos="zoom-in">Objectives:</h2>
            <p data-aos="zoom-in">Playing around with various CAD, FEA. CFD and Composite FEA  softwares for getting a 
            deeper understanding of designing and implementation.</p>
            <h2 data-aos="zoom-in">Technology used:</h2>
            <p data-aos="zoom-in">SolidWorks, AutoCAD, Fusion 360, CATIA, Creo(amatuer level). Learnt CFD using Ansys and 
            Cadence, FEA on Altair One, Fusion 360 . Also tried Composite FEA (currently working on it).</p>
            <h2 data-aos="zoom-in">Challenges faced::</h2>
            <p data-aos="zoom-in"> -Brainstorming ideas.</p>
            <p data-aos="zoom-in"> -Learning new tools from scratch using youtube videos and office hours with mechanical 
            engineering professors.</p>
            <p data-aos="zoom-in"> -Designing products for 3D printing which required various sizes and material composition.</p>

            <h2 data-aos="zoom-in">Outcomes:</h2>
            <p data-aos="zoom-in">Proficiency in CAD, CFD and FEA softwares used in industries for large scale production.</p>
            </li>
            
            
            <li>
            <ul className='images'>
                <li data-aos="zoom-in"><img src={image1} alt='uh' width={500}/></li>
                <li data-aos="zoom-in"><img src={image2} alt='uh' width={500}/></li>
                <li data-aos="zoom-in"><img src={image3} alt='uh' width={500}/></li>
            </ul></li>
            </ul>
        </div>
        </>
    )

}