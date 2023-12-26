import React from 'react';
import { missionvision } from '../../Data';
import shape from '../../assets/shape.png';
import "./missionvision.css" ;
 
const Missionvision = () =>{
    return(
        <section className="missionvision section" id="missionvision">
            <h2 className="section__title" data-title="Mission-Vision">
                Our Mission And Vision
            </h2>
        
            <div className="missionvision__grid container grid">
                {missionvision.map(({img, title, description}, index) => {
                    return (
                        <div className="missionvision__item" key={index}>
                            <img src={img} alt ="" className="missionvision__img" />
                            <h3 className="missionvision__title">{title}</h3>
                            <p className="missionvision__description">{description}
                            </p>

                            <img src={shape} alt="" className="missionvision__shape" />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Missionvision;