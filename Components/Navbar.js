import React, { useContext, useRef } from 'react';
import logo from '@/public/images/shared/desktop/logo.svg';
import Image from 'next/image';
import classes from './Navbar.module.css'
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';


const Navbar = () => {
    const burger = useRef();
    const { isMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution } = useContext(GlobalContext);
    const { isMenuOpen, setIsMenuOpen } = useContext(GlobalContext);
    const { toggleMenu } = useContext(GlobalContext);
    return (
        <nav className={classes.navbar}>
            <div className={classes.navWrapper}>

                <div className={classes.logo}>
                    <Link href="/">
                        <Image src={logo} alt='logo payAPI' className={classes.logoImg} />
                    </Link>
                </div>
                {/* Classic links */}
                <div className={`${isMobileResolution ? "display-none" : classes.navLink}`}>
                    <Link href="" className={classes.link}>Pricing</Link>
                    <Link href="" className={classes.link}>About</Link>
                    <Link href="" className={classes.link}>Contact</Link>
                </div>

                <div className={`${isMobileResolution ? "display-none" : ""}`}>

                    <button className='primary-button'>Schedule a demo</button>
                </div>


                {/* Burger menu */}
                <div ref={burger} className={`${isMobileResolution ? classes.hamburger : classes.hamburger + " display-none"}`}
                    onClick={() => {
                        toggleMenu();
                        burger.current.classList.toggle(classes.isActive);

                    }}>
                    <div className={classes.bar} />
                </div>

                {/* Mobile menu */}
                <div className={`${classes.mobileNav} ${isMenuOpen ? classes.active : ""}`}>
                    <div className={classes.mobileNavWrapper}>
                        <Link href="" className={classes.mobileLink} onClick={() => {
                            toggleMenu();
                            burger.current.classList.toggle(classes.isActive);
                        }}>Pricing</Link>

                        <Link href="" className={classes.mobileLink} onClick={() => {
                            toggleMenu();
                            burger.current.classList.toggle(classes.isActive);
                        }}>About</Link>

                        <Link href="" className={classes.mobileLink} onClick={() => {
                            toggleMenu();
                            burger.current.classList.toggle(classes.isActive);
                        }}>Contact</Link>
                        <button className='primary-button'>Schedule a demo</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;