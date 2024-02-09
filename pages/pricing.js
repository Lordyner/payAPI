import CTAReminder from '@/Components/CTAReminder';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import Pricing from '@/Components/Pricing';
import GlobalContext from '@/Store/GlobalContext';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

export default function PricingPage() {

    /* State */
    const [screenWidth, setScreenWidth] = useState();

    /* Context */
    const { setIsMobileResolution } = useContext(GlobalContext);
    const { setIsTabletResolution } = useContext(GlobalContext);
    const { setIsLaptopResolution } = useContext(GlobalContext);
    const { setIsDesktopResolution } = useContext(GlobalContext);
    const { tabletResolution, laptopResolution, desktopResolution } = useContext(GlobalContext);
    const { setIsLoading } = useContext(GlobalContext);
    const { isMenuOpen } = useContext(GlobalContext);

    /* Router */
    const router = useRouter();

    /* Functions */
    const handleMenuDisplay = () => {
        setScreenWidth(window.screen.width);

        const isMobile = screenWidth < tabletResolution;
        const isTablet = screenWidth >= tabletResolution && screenWidth < laptopResolution;
        const isLaptop = screenWidth >= laptopResolution && screenWidth < desktopResolution;
        const isDesktop = screenWidth >= desktopResolution;

        setIsMobileResolution(isMobile);
        setIsTabletResolution(isTablet);
        setIsLaptopResolution(isLaptop);
        setIsDesktopResolution(isDesktop);
    }

    useEffect(() => {
        // Handle menu display
        handleMenuDisplay();
        window.addEventListener('resize', handleMenuDisplay);

        // Handle loading spinner
        router.events.on("routeChangeStart", () => setIsLoading(true));
        router.events.on("routeChangeComplete", () => setIsLoading(false));
        console.log()
    }, [screenWidth])
    return (
        <>
            <Head>
                <title>PayAPI - Pricing</title>
                <meta name="description" content="Start building with our APIs for absolutely free" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`overlay-burger-menu ${isMenuOpen ? 'isActive' : ''}`} />
            <Navbar />
            <main className={`pricing max-width top-right-bg-circle`}>
                <Pricing />
                <CTAReminder />
            </main>
            <Footer />
        </>
    )
};
