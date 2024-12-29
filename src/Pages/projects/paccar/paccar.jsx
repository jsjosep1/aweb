import './paccar.css'
import image1 from './pac1.jpg'
import image2 from './pac2.jpg'
import Aos from "aos";
import 'aos/dist/aos.css'
import React, { useEffect} from "react";


export default function Paccar(){
    useEffect(() => {
        Aos.init({once: true, duration : 500});
    })
    return (
        <>
        <div >
            <ul className='paccar'><li>
            <h1 data-aos="zoom-in">Internship at Paccar</h1>
            <h2 data-aos="zoom-in">Objectives: </h2>
            <p data-aos="zoom-in">Finish high-objective FEA projects for various clients like Peterbilt, Kenworth and DAF Trucks</p>
            <h2 data-aos="zoom-in">Technology Used:</h2>
            <p data-aos="zoom-in">Altair One Hypermesh 2021.2, Hyperview 2021.2, Hypermesh 2024, CAD softwares(varying)</p>
            <h2 data-aos="zoom-in">Challenges Faced</h2>
            
            <p data-aos="zoom-in">- Various iterations because of varying modal and linear static analysis. Changes in CAD models 
            for better outcome</p>
            <p data-aos="zoom-in">- Used various materials mainly related to steel and hard plastic. Frequency, displacement, etc. 
            were obtained using softwares.</p>

            <h2 data-aos="zoom-in">Outcomes:</h2>
            <p data-aos="zoom-in">Presentations to clients and accepted FEA simulation later implemented to manufacturing 
            phase for real life testing on track and future production of the project.</p></li>
            <li>
            <ul className='images'>
                <li data-aos="zoom-in"><img src={image1} alt='uh' width={500}/></li>
                <li data-aos="zoom-in"><img src={image2} alt='uh' width={500}/></li>
            </ul></li>
            </ul>
        </div>
        </>
    )

}