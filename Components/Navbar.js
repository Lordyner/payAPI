import React, { useContext, useRef } from 'react';
import logo from '@/public/images/shared/desktop/logo.svg';
import Image from 'next/image';
import classes from './Navbar.module.css'
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';


const Navbar = () => {
    const burger = useRef();
    const { isMobileResolution } = useContext(GlobalContext);
    const { isMenuOpen } = useContext(GlobalContext);
    const { toggleMenu } = useContext(GlobalContext);
    return (
        <header className={`${classes.header}`}>
            <nav className={`${classes.navbar} max-width`}>
                <div className={classes.navWrapper}>
                    <div className='d-flex gap-4 align-items-center'>
                        <div className={classes.logo}>
                            <Link href="/">
                                <Image src={logo} alt='logo payAPI' className={classes.logoImg} />
                            </Link>
                        </div>
                        {/* Classic links */}
                        <div className={`${isMobileResolution ? "display-none" : classes.navLink}`}>

                            <Link href="/pricing" className={classes.link}>Pricing</Link>
                            <Link href="/about" className={classes.link}>About</Link>
                            <Link href="/contact" className={classes.link}>Contact</Link>
                        </div>
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
                            <Link href="/pricing" className={classes.mobileLink} onClick={() => {
                                toggleMenu();
                                burger.current.classList.toggle(classes.isActive);
                            }}>Pricing</Link>

                            <Link href="/about" className={classes.mobileLink} onClick={() => {
                                toggleMenu();
                                burger.current.classList.toggle(classes.isActive);
                            }}>About</Link>

                            <Link href="/contact" className={classes.mobileLink} onClick={() => {
                                toggleMenu();
                                burger.current.classList.toggle(classes.isActive);
                            }}>Contact</Link>
                            <button className='primary-button'>Schedule a demo</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;