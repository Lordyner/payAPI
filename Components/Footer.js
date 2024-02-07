import React, { useContext } from 'react';
import { SiFacebook, SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';
import classes from './Footer.module.css';
import logo from '@/public/images/shared/desktop/logo_white.svg';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';

const Footer = () => {

    const { isMobileResolution } = useContext(GlobalContext)
    return (
        <footer className={`${classes.footer} `}>
            <div className={classes.wrapper}>
                <div className={`${classes.links}`}>
                    <Link href="/">
                        <Image src={logo} alt='logo payAPI' className={classes.logoImg} />
                    </Link>
                    <Link href="/pricing" className={classes.link}>Pricing</Link>
                    <Link href="/about" className={classes.link}>About</Link>
                    <Link href="/contact" className={classes.link}>Contact</Link>
                </div>
                <div className={classes.socialLinks}>
                    <a href="" className={classes.icon} target='_blank'>
                        <SiFacebook alt='icône facebook' />
                    </a>
                    <a href="" className={classes.icon} target='_blank'>
                        <SiTwitter alt='icône twitter' />
                    </a>
                    <a href="" className={classes.icon} target='_blank'>
                        <SiLinkedin alt='icône linkedin' />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;