import './decor.css'
import image1 from './dec1.jpg'
import image2 from './dec2.jpg'
import Aos from "aos";
import 'aos/dist/aos.css'
import React, { useEffect} from "react";


export default function Decor(){
    useEffect(() => {
        Aos.init({once: true, duration : 500});
    })
    return (
        <>
        <div >
            <ul className='decor'><li>
            <h1 data-aos="zoom-in">3D Printing Automotive Room Decor</h1>
            <h2 data-aos="zoom-in">Project Overview: </h2>
            <p data-aos="zoom-in"> Driven by a passion for automotive design, I embarked on a project to infuse my room with automotive aesthetics. Utilizing 
            advanced design and manufacturing technologies, I aimed to create a highly detailed and functional miniature vehicle model</p>
            <h2 data-aos="zoom-in">Design and Prototyping:</h2>
            <p data-aos="zoom-in">- Software Utilized: Employed SolidWorks and Fusion 360 for intricate 3D modeling, ensuring precise design specifications and 
            aesthetics</p>
            <p data-aos="zoom-in">- Material Selection: Chose PLA material for its suitability in 3D printing, providing the desired finish and durability</p>
            <p data-aos="zoom-in">- FEA Testing: Conducted Finite Element Analysis to optimize the structural integrity and performance of the model, particularly 
            focusing on suspension dynamics to withstand real-world stresses</p>

            <h2 data-aos="zoom-in">Fabrication Challenges</h2>
            <p data-aos="zoom-in">- Encountered initial setbacks with suspension modeling, which led to comprehensive redesigns.</p>
            <p data-aos="zoom-in">- Overcame printing challenges through iterative testing and adjustments, spanning over three months of dedicated troubleshooting</p>
            

            <h2 data-aos="zoom-in">Final Assembly:</h2>
            <p data-aos="zoom-in">- Successfully printed and assembled all components, including custom-designed 3D printed wheels.</p>
            <p data-aos="zoom-in">- Carefully calculated the radius and ratio design system, ensuring seamless integration of front and rear wings to the main bodywork.</p>
            <h2 data-aos="zoom-in">Learning Outcomes: </h2>
            <p data-aos="zoom-in">This project was a profound learning curve in 3D modeling, CAD, FEA, and 3D printing. It not only enhanced my technical 
                skills but also reinforced my problem-solving capabilities in mechanical design</p>
            <h2 data-aos="zoom-in">Future Plans:</h2>
            <p data-aos="zoom-in">Motivated by the success and insights gained from this project, I am eager to tackle more complex automotive design 
            projects in the future</p>
            </li>
            
            
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