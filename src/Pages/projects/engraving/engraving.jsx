import './engraving.css'
import image1 from './eng1.jpg'
import image2 from './eng2.jpg'
import image3 from './eng3.jpg'
import Aos from "aos";
import 'aos/dist/aos.css'
import React, { useEffect} from "react";


export default function Engraving(){
    useEffect(() => {
        Aos.init({once: true, duration : 500});
    })
    return (
        <>
        <div >
            <ul className='engraving'><li>
            <h1 data-aos="zoom-in">Lazer Engraving</h1>
            <h2 data-aos="zoom-in">Conceptualization:</h2>
            <p data-aos="zoom-in">Fueled by a passion for automotive aesthetics and personal decor, I initiated the project by 
            sourcing a silhouette of my dream car, the F82 BMW M4.</p>
            <h2 data-aos="zoom-in">CAD Design and Prototyping:</h2>
            <p data-aos="zoom-in">Employed CAD software to accurately design the BMW M4’s silhouette, 
            integrating it with my name to create a detailed and scalable template for laser engraving.</p>
            <h2 data-aos="zoom-in">Creative Process:</h2>
            <p data-aos="zoom-in">Selected a piston head from a 1992 Mazda Miata as the base for the artwork. Utilized 
            Photoshop to refine the CAD-generated design, preparing it for the engraving process.</p>
            <h2 data-aos="zoom-in">Laser Engraving Execution:</h2>
            <p data-aos="zoom-in">Collaborated with a local laser engraving service to imprint the meticulously 
            designed silhouette onto the piston head, ensuring precision and fidelity in the artwork.</p>

            <h2 data-aos="zoom-in">Refinement and Presentation:</h2>
            <p data-aos="zoom-in">Thoroughly cleaned the engraved piston head using an ultrasonic cleaner to 
            remove any residual grease and dirt, enhancing its aesthetic appeal for display as room decor.</p>
            <h2 data-aos="zoom-in">Documentation:</h2>
            <p data-aos="zoom-in">Captured and presented a series of step-by-step photographs, detailing the transformation 
                from an automotive component to a unique piece of art, tying in my engineering skills and artistic vision.</p>
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