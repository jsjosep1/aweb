import './miata.css'
import image1 from './miata1.jpg'
import image2 from './miata2.png'
import image3 from './miata3.jpg'
import image4 from './miata4.jpg'

import Aos from "aos";
import 'aos/dist/aos.css'
import React, { useEffect} from "react";


export default function Miata(){
    useEffect(() => {
        Aos.init({once: true, duration : 500});
    })
    return (
        <>
        <div  >
            <ul className='miata' ><li>
            <h1 data-aos="zoom-in">Project Miata - Performance Enhancment Initiative</h1>
            <h2 data-aos="zoom-in">Project Overview: </h2>
            <p data-aos="zoom-in"> Engine Upgrade: Modified a 1992 Mazda Miata 1.6L engine by integrating a turbocharger, elevating horsepower 
            from 120 to 190hp, achieving a gain of 5-10 hp per psi of boost</p>
            <p data-aos="zoom-in">Custom Dashboard Design: Redesigned the engine using new pistons and leveraged CAD and printing 
            technologies to create a dashboard for real-time turbo and coolant monitoring.</p>
            <p data-aos="zoom-in">Suspension and Brake Overhaul: Enhanced vehicle dynamics by upgrading the suspension system and braking 
            components, significantly improving handling and stopping performance.</p>
            </li>
            </ul>

            <ul className='car_pics'>
                <li data-aos="zoom-in"><img src={image1} alt='uh' width={300}/></li>
                <li data-aos="zoom-in"><img src={image2} alt='uh' width={300}/></li>
                <li data-aos="zoom-in"><img src={image3} alt='uh' width={300} height={250}/></li>
                <li data-aos="zoom-in"><img src={image4} alt='uh' width={300}/></li>
            </ul>
        </div>
        </>
    )

}