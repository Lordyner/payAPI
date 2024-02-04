import React, { useContext } from 'react';
import classes from './About.module.css';
import Image from 'next/image';
import aboutImgDesktop from '@/public/images/about/desktop/image-team-members.jpg'
import aboutImgTablet from '@/public/images/about/tablet/image-team-members.jpg'
import aboutImgMobile from '@/public/images/about/mobile/image-team-members.jpg'
import CTAReminder from './CTAReminder';
import GlobalContext from '@/Store/GlobalContext';

const About = () => {

    const { isMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution } = useContext(GlobalContext);
    const { isLaptopResolution } = useContext(GlobalContext);
    const { isDesktopResolution } = useContext(GlobalContext);
    return (
        <div className={classes.container}>
            <h1>We empower innovators by delivering access to the financial system</h1>
            <div className={classes.aboutInfo}>
                <h2>Our vision</h2>
                <p> Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. </p>
            </div>
            <div className={classes.aboutInfo}>
                <h2>Our business</h2>
                <p> At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. </p>
            </div>
            {isMobileResolution && <Image src={aboutImgMobile} alt='team members' />}
            {(isTabletResolution || isLaptopResolution) && <Image src={aboutImgTablet} alt='team members' />}
            {isDesktopResolution && <Image src={aboutImgDesktop} alt='team members' />}

            <div className={classes.numbers}>
                <div className={classes.number}>
                    <p>Team members</p>
                    <h3>300+</h3>
                </div>
                <div className={classes.number}>
                    <p>Offices in the US</p>
                    <h3>3</h3>
                </div>
                <div className={classes.number}>
                    <p>Transactions analyzed</p>
                    <h3>10M+</h3>
                </div>
            </div>
            <div className={classes.aboutInfo}>
                <h2>The culture</h2>
                <p> We strongly believe there&apos;s always an opportunity to learn from each other outside of day-to-day work, whether it&apos;s company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title. </p>
            </div>
            <div className={classes.aboutInfo}>
                <h2>The people</h2>
                <p> We&apos;re all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills. We&apos;re a hardworking team that loves to collaborate, share ideas, and support each other. We work hard, but we have a lot of fun along the way. </p>
            </div>

        </div>
    );
};

export default About;