import React from "react";
import aboutImg from "../../assets/about-img.jpg";
import {FiCheckCircle} from "react-icons/fi"; 
import "./about.css";


const About =() =>{
    return (
        <section className="about section" id="about">
            < div className= "about__grid container grid">
                <div className= "about__img-wrapper">
                    <img src={aboutImg} alt="" className="about__img"/>
                </div>  
                <div className="about__content">
                    <h2 className="section__title title-left" data-title="About Us">
                        Fresh Quality And Organic Tasty Coffee House For You
                    </h2>
                        
                    <p className ="about__description">
                        Welcome to our Coffee Haven — Where Aroma Meets Excellence At the heart of our community
                        -focused coffee house lies a team dedicated
                        to bringing you the finest organic, sustainably-sourced coffee. 
                        Each cup you savor is the result of our baristas' expertise and our shared 
                        passion for creating memorable coffee experiences.
                    </p>

                    <div className="about__details grid">
                        <p className="about__details-description ">
                           < FiCheckCircle /> 
                            Commitment to Quality
                        </p>

                        <p className="about__details-description ">
                           < FiCheckCircle /> 
                            Organic & Sustainable 
                        </p>

                        <p className="about__details-description ">
                           < FiCheckCircle /> 
                            A Welcoming Smile
                        </p>
                    </div>
                  <a href="#team" className="btn">Our Team</a>
                </div> 
            </div>
        </section>    
    )
}

export default About

