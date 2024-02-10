import React from 'react';
import classes from './Hero.module.css';
import Image from 'next/image';
import heroImg from '@/public/images/home/desktop/illustration_phone_mockup.png';

const Hero = () => {

    return (
        <section id="hero" className={`${classes.heroContainer} max-width`}>
            <div className={classes.content}>
                <h1>Start building with our APIs for absolutely free.</h1>
                <div className={classes.heroCTA}>
                    <input placeholder='Enter email address'></input>
                    <button className='primary-button'>Schedule a demo</button>
                </div>
                <p>Have any questions? <a href="">Contact Us</a></p>
            </div>
            <div className={classes.heroImg}>
                <Image src={heroImg} alt='mockup téléphone' className={classes.heroImg} />
            </div>
        </section >
    );
};

export default Hero;