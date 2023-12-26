import React from "react";
import './home.css';

const Home =() => {
    return (
        <section className="home" id='home'>
            <div className= "home__container container">
                <div className="home__content">
                    <span className="home__subtitle">Welcome to Cofferoo!</span>
                    <h1 className="home__title">
                        Crafting Moments, One Cup at a Time  
                    </h1> 
                    <p className="home__description">
                       There are many variations of passages available but the majority have suffered alteration in 
                       some form by injected humour or randomised words.
                    </p>
                    <div className="home__btns">
                        <a href="#menu" className="btn">
                            Check Products
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home